import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const changeRoute = (page) => {
    navigate(page);
  };

  const a = 1;

  React.useLayoutEffect(() => {
    console.log("123");
  }, [a]);

  return (
    <div>
      <button onClick={() => changeRoute("/page1")}>/page1</button>
      <button onClick={() => changeRoute("/page2")}>/page2</button>
      <h2>铁打的内容</h2>
    </div>
  );
};

export default App;
