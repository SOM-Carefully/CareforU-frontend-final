import './Apply_Btn.css';

import axios from 'axios';

function Apply_Btn(){  
    const ApplyService = (e) => {
        axios({
            method: "post",
            url: "http://localhost:8080/api/v1/services/education",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('token')
            },
            data: {
                "businessType": "TRANSLATE",
                "content": "안녕하세요. \n저는 컴퓨터과학과 20학번 이혜린입니다.\n다름이 아니라 케어풀리라는 팀은\n어떤 사람들로 구성되어 있고, 어느 곳에서 이런 팀이 만들어진 것이 궁금하여 문의를 드리게 되었습니다!",
                "requestDate": "2022-11-30",
                "requestTime": "18:34:22"
            }
            }).then((res) => {
            alert('서비스가 신청되었습니다.');
            }).catch((error) => {
                alert("어쩌지이... ? 안 뜨는데에..");
        });
    }
    return(
        <div className="apply_btn_wrap" onClick={ApplyService}>
            신청하기
        </div>
    );
}

export default Apply_Btn;