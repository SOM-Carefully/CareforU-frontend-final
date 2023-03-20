import './Service.css';
import CompleteImg from './../../img/serviceComplete.png';
function Service_Complete({ setModalOpen, id, title, content, writer }: PropsType) {

    //서비스 신청 성공 여부 보여주기
    return (
        <div className={"Service_post_complete"}>
            <img src={CompleteImg} />
        </div>
    );
}

export default Service_Complete;