import React from "react";
import "./App.css";
import Birthday from "./components/Birthday";
import Collage from "./components/Collage";

function App() {
  const countdownInfo = {
    name: "Ana Gabriela Amador Carreon aka Mi amor",
    month: 9,
    day: 6,
  };
  return (
    <div className="App">
      <Birthday {...countdownInfo} />
      <Collage />
    </div>
  );
}

export default App;
