const Screen = (props) => {
    console.log(props)
    return (
        <div className="screen">
            <p>{props.content}</p>
        </div>
    )
}

export default Screen;