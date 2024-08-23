

function Button(props){
    return (
        <button className="grid-item" value={props.value} onClick={props.onButtonClick} >{props.buttonName}</button>
    )
}

export default Button;