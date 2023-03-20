import React from 'react'; import "./input_box.scss";
function Input_box(props) {
  return (
    <div className="input_box_container">
      <div className="title_text">
        <h3 className="h3">{props.input_title}</h3>
      </div>
      <div className="input_container">
        <input
          onChange={props.onChange}
          value={props.value}
          className="input"
          style={{ height: props.height }}
          placeholder={props.place_holder}
        ></input>
      </div>
    </div>
  );
}

export default Input_box;
