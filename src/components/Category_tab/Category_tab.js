import React from 'react'; import "./category_tab.scss";
function Category_tab() {
    return (
        <div className="category_tab_container">
            <div>
                <button className="btn">전체</button>
                <button className="btn">교통</button>
                <button className="btn">통신</button>
                <button className="btn">주거</button>
                <button className="btn">교육</button>
            </div>
        </div>
    );
}

export default Category_tab;
