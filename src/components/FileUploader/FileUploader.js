import { useState } from "react";
import "./FileUploader.css";
import axios from 'axios';
import * as PropTypes from "prop-types";
import profile from '../../img/profile.png';
import { useNavigate } from 'react-router-dom';

// 파일 업로드 컴포넌트
const FileUploader = () => {

    const navigate = useNavigate();

    // 이미지 변수 설정
    const [image, setImage] = useState({
        image_file: "",
        preview_URL: profile,
    });

    let inputRef;

    // 이미지 업로드
    const saveImage = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();

        if (e.target.files[0]) {
            fileReader.readAsDataURL(e.target.files[0])
        }
        fileReader.onload = () => {
            setImage ({
                image_file: e.target.files[0],
                preview_URL: fileReader.result
            })
        }
    }

    // 이미지 삭제
    const deleteImage = () => {
        setImage({
            image_file: "",
            preview_URL: profile,
        });
    }

    // POST 요청으로 서버에 이미지 전송
    const sendImageToServer = (e) => {
        if (image.image_file) {
            const formData = new FormData();
            formData.append('file', image.image_file);
            axios.post('http://54.180.210.232:8080/api/v1/file', formData, {
                headers: {
                    "Content-Type": `multipart/form-data`,
                },
            }).then((res) => {
                // 서버에 이미지 등록 완료
                alert("사진이 등록되었습니다.");
                setImage({
                    image_file: "",
                    preview_URL: "img/default_image.png",
                });
                localStorage.setItem('profileUrl', res.data.result[0]);
                navigate(-1);
            }).catch((error) => {
                // 사진을 올리지 않고 완료 버튼을 눌렀을 경우 에러
                alert("사진을 등록해주세요!");
                console.log(error);
            });
        }
    }

    return (
        <div className="uploader-wrapper">
            <input type="file" accept="image/*"
                   onChange={saveImage}
                   onClick={(e)=>e.target.value = null}
                   ref={refParam => inputRef = refParam}
            />
            <div className="img-wrapper">
                <img src={image.preview_URL}/>
            </div>
            <div className="upload-button-wrapper">
                <button type="primary" onClick={() => inputRef.click()}>
                    Preview
                </button>
                <button onClick={deleteImage}>
                    Delete
                </button>
                <button onClick={sendImageToServer}>
                    Upload
                </button>
            </div>
        </div>
    );
}

export default FileUploader;