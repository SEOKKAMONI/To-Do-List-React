import { useState, useSyncExternalStore } from "react";
import "./style/Container.css";
import "./style/Search.css";
import "./style/List.css";
import "./style/Button.css"


function App() {
  const [toDO, setToDO] = useState(""); 
  const [toDos, setToDos] = useState([]); // todo list 부분
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (evnet) => {
    evnet.preventDefault();
    if(toDO === "") {
      return;
    }

    setToDos(currentArray => [toDO, ...currentArray]) // ... 을 붙힘으로써 [1, 2, 3, 4] 이런식으로 저장됨
    // 붙히지 않는다면 배열안에 배열 즉 [[[]]] 이런식으로 저장됨
    // [뭐가, 어디에]
    // 입력시 toDO에 있는 입력 값이 toDos Array에 들어가게 됨

    setToDO("");
  };

  const deleteBtn = () => {
    console.log("삭제 test")
  }
  
  return (
    <div className="container">
      <h1 className="title">My To Dos ({toDos.length})</h1>
      <form className="inputForm" onSubmit={onSubmit}>
        <input
          className="inputText"
          onChange={onChange}
          value={toDO}
          type="text"
          placeholder="Write yout to do..."
        />
        <button className="inputBtn">Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li className="toDOList" key={index}>
            <span className="toDo">
              <span className="checkToDo">1.</span>
              {item}
            </span>
            <button
              onClick={deleteBtn} 
              className="deleteBtn"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
