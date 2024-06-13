import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || []
  );

  return (
    <>
      <div className="app">
        <Main data={data} setData={setData} />
      </div>
    </>
  );
}

export default App;
