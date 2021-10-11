import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const changeRoute = (page) => {
    navigate(page);
  };

  return (
    <div>
      <button onClick={() => changeRoute("/page1")}>/page1</button>
      <button onClick={() => changeRoute("/page2")}>/page2</button>
    </div>
  );
};

export default App;
