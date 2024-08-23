const Operator =()=> {
    const op = ["+","-","/","x"]
    return (
        <div className="gridOp">
            {
                op.map((item) => (
                    <button className="grid-item">{item}</button>
                ))
            }
        </div>
    )
}
export default Operator