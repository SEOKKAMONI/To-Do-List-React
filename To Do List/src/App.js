import "./style/Container.css"
import "./style/InputMemo.css"
import "./style/Memo.css"

import InputMemo from "./components/InputMemo"
import Memo from "./components/Memo"

function App() {
  return (
    <div className="container">
      <InputMemo />
      <Memo />
    </div>
  );
}

export default App;
