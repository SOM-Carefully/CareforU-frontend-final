function Service_Button(props) {
    const { isSelected, handleClick, elementIndex } = props;
    return(
        <li className="Service_Button_List"
            onClick={() => handleClick(elementIndex)}
            style={isSelected ? { backgroundColor: '#E0363F' } : { backgroundColor: '#FFB3AD'}}
        >
            {props.content}
        </li>
    )
}

export default Service_Button;