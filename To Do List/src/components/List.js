import { useState } from "react";

function List( {item} ) {
    const [checkBox, setCheckBox] = useState(false);

    const toDoCheck = (event) => {
        setCheckBox(event.target.checked)
    }

    return (
        
        <li className="item">
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