import React from 'react';


function Category(props) {
    return (
        <div>
            <div className="category_menu" >
                <div ><img className='icon' src="/pin.png"></img></div>
                {props.category_name}  
            </div>
        </div>
    );
}

export default Category;
