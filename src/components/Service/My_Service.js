import './Service.css';
import axios from 'axios';
import Board_header2 from "../Board_header2/Board_header2";
import Title from './../Title/Title';
import Board_list2 from "../Board_list2/Board_list2.js";
import {React, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
function My_Service(){

    // 사용자 토큰
    const token = localStorage.getItem('accessToken');
    // 사용자가 입력할 추가요청사항
    const [content, setContent] = useState('');
    // 사용자가 이동하기 위한 navigate 선언
    const navigate = useNavigate();

    // 사용자 정보 가져오기
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/services/my",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            setContent(res.data.result);
            console.log(content);
        }).catch((error) => {
            alert("정보를 가져올 수 없습니다");
        });
    },[])
    // 전체 서비스 불러올 때 저장했던 localStorage에서 교통, 통신, 주거, 교육 구분해 저장하기
    const onMoveDetailServiceContent = (id, type, e) => {
        localStorage.setItem('detailBookingId', id);
        localStorage.setItem('businessTypeResponse', type);
        if(localStorage.getItem('businessTypeResponse') == 'COMMUNICATION'){
            localStorage.setItem('businessType', 'communications');
            navigate('/service_detail');
        }
        if(localStorage.getItem('businessTypeResponse') == 'EDUCATION'){
            localStorage.setItem('businessType', 'educations');
            navigate('/service_detail');
        }
        if(localStorage.getItem('businessTypeResponse') == 'TRAFFIC'){
            localStorage.setItem('businessType', 'traffics');
            navigate('/service_detail');
        }
        if(localStorage.getItem('businessTypeResponse') == 'DWELLING'){
            localStorage.setItem('businessType', 'dwellings');
            navigate('/service_detail');
        }
    }

    return(
        <div className="Service_Top_Wrap">
            <Title title="내 서비스" />
            <Board_header2 t1="번호" t2="글쓴이" t3="신청일" t4="상태"/>
            <ul>
                {content===Object(content)
                    ? content.content.map((content, index) => (
                        <li key={index}onClick={e =>onMoveDetailServiceContent(content.bookingId, content.businessTypeResponse, e)} >
                            <Board_list2 num={index+1} username={content.userUsername} posttime={content.createdAt[0] + '.' + content.createdAt[1] + '.' + content.createdAt[2]} status={content.bookingStatus == 'ACCEPT' ? '승인됨' : content.bookingStatus == 'WAITING' ? '대기중' : content.bookingStatus == 'CANCEL' ? '취소됨' : '완료'}/>
                        </li>
                    ))
                    : "등록된 글이 없습니다"}
            </ul>
        </div>
    );
}

export default My_Service;