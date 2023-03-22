import { useState, useEffect, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from "./../../components/Header/Header";
import "./../../styles/post/select_category.scss"
import Category from './../../components/Category/Category';

function Select_category() {
    const [category_names, setCategory_names] = useState("")

    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();
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

        //console.log("get 요청")
    }

    useEffect(() => {
        Get()
    }, []);


    return (
        <div>
            <Header />
            <div className="category_box">
                {/* <div className="category_menu" onClick={click_notice}>
                    <div ><img className='icon' src="/pin.png"></img></div>
                    공지사항
                </div>
                <div className="category_menu" onClick={click_post}>
                    <img className='icon' src="/pin.png"></img>자유게시판
                </div> */}
                {/* <ul> */}
                    {category_names === Object(category_names)
                        ? category_names.map((content, index) => (
                            <div key={index}>
                                <Link to={`/board_list/${content.categoryId}`} style={{ textDecoration: 'none', color: "black" }}>
                                    <Category category_name={content.categoryName} />
                                </Link>

                            </div>
                        ))
                        : ""}
                {/* </ul> */}
            </div>

        </div>
    );
}

export default Select_category;
