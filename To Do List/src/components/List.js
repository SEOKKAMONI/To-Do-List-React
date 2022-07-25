function List( {index, item, checkBox, toDoCheck} ) {
    return (
        
        <li className="item" key={index}>
            <div className="itemArea">
                <input
                    onClick={toDoCheck}
                    className="checkBox"
                    type="checkbox"
                />
                <span className={`toDoText ${checkBox ? "finish" : ""}`}>{item}</span>
            </div>
            <button className="deleteBtn">
                ❌
            </button>
        </li>
    )
}

export default List