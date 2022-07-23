import { useState } from "react";

function InputMemo( {toDos,setToDos} ) {
    const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(toDo)
        if(toDo === "") {
            return; // 만약 toDo 가 비어있다면 아무 동작도 안함
        }
        setToDos(currentArray => [toDo, ...currentArray]) // todo를 currentArray(toDOs) 배열에 저장을함
        // [뭐가, 어디에]

        setToDo(""); // toDo를 비어줌
    }
    const onChange = (event) => {
        setToDo(event.target.value); // 값이 바뀔때마다 바뀐값을 toDo에 넣어줌
    }

    return (
        <div className="inputForm">
            <form className="form_memo" onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    className="input_memo"
                    placeholder="Write to do ..."
                    type="text"
                />
                <button
                className="add_btn"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default InputMemo