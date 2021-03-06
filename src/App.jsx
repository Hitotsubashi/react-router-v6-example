import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();

  const changeRoute = (page) => {
    navigate(page);
  };

  return (
    <div>
      <button onClick={() => changeRoute("/page1")}>/page1</button>
      <button onClick={() => changeRoute("/page2")}>/page2</button>
      <Routes>
        <Route path="/page1" element={<h2>page1</h2>} />
        <Route path="/page2" element={<h2>page2</h2>} />
      </Routes>
    </div>
  );
};

export default App;
