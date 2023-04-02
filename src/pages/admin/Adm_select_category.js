import { useState, useEffect, React } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './../../components/Category/Category';
import Header from './../../components/Header/Header';
import "./../../styles/admin/adm_select_category.scss"
import Modal_setName from './Modal_setName.js';
function Adm_select_category() {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [category_names, setCategory_names] = useState("")

    const token = localStorage.getItem('accessToken');
    const click_notice = () => {
        navigate("/notice_list");
    };
    const click_post = () => {
        navigate("/board_list");
    };

    function Get() {
        fetch("http://54.180.210.232:8080/api/v1/category", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        }) //method get 은 생략 가능
            .then((res) => res.json())
            //.then((res) => console.log(res
            .then((res) => setCategory_names(res.result.categoryResponses
            ))

        //console.log("function test")
    }

    function deleteCategory(categoryId) {
        fetch(`http://54.180.210.232:8080/api/v1/category/${categoryId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        })
          .then((res) => res.json())
          .then(() => {
            // 삭제 후 카테고리 목록을 다시 불러옵니다.
            Get();
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
      

    useEffect(() => {
        Get()
    }, []);

    useEffect(() => {
        console.log("바뀜:" + openModal)
    }, [openModal]);

    return (
        <div>
            <Header />
            {openModal && <Modal_setName setModal={setOpenModal} />}
            <div className="category_box">
                {/* <div className="category_menu" onClick={click_notice}>
                    <div ><img className='icon' src="/pin.png"></img></div>
                    공지사항
                </div>
                <div className="category_menu" onClick={click_post}>
                    <img className='icon' src="/pin.png"></img>자유게시판
                </div>
                <Category category_name="안녕" /> */}
                <ul className='menu'>
                    {category_names === Object(category_names)
                        ? category_names.map((content, index) => (
                            <li  key={index}>
                                {/* <Link to={`/${props.detail}/${index}`} style={{ textDecoration: 'none', color: "black" }}> */}
                                <div className='category_name'>
                                <Category category_name={content.categoryName} /><div className='btn_delete' onClick={() => deleteCategory(content.categoryId)}>삭제</div>
                                </div>
                                
                                {/* </Link> */}

                            </li>
                        ))
                        : ""}
                </ul>

                <img className='plus_icon' onClick={() => { setOpenModal(true) }} src="/plus_icon.png"></img>
            </div>


        </div>
    );
}

export default Adm_select_category;
