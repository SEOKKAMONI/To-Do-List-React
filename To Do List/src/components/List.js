import { useState } from "react";

function List( {item, toDos, index} ) {
    const [checkBox, setCheckBox] = useState(false);

    const toDoCheck = (event) => {
        setCheckBox(event.target.checked)
    }

    const deleteBtn = (event) => {
        const removing = event.target.parentElement;
        toDos.splice(index,index); // 배열에서도 삭제
        console.log(toDos)


        removing.remove();
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
            <button 
                className="deleteBtn"
                onClick={deleteBtn}
            >
                Delete
            </button>
        </li>
    )
}

export default List