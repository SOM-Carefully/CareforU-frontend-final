
import React from 'react'; import "./Category_btn.scss";
function Category_btn() {
    return (
        <div className="category_btn_container">
            <div>
                <h4 className="h4">카테고리</h4>
            </div>
            <div>
                <button className="btn">교통</button>
                <button className="btn">통신</button>
                <button className="btn">주거</button>
                <button className="btn">교육</button>
            </div>
        </div>
    );
}

export default Category_btn;
