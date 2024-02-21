import React from "react";
import "./App.css";
import Birthday from "./components/Birthday";
import Collage from "./components/Collage";

function App() {
  const countdownInfo = {
    name: "Breaking the real distance",
    month: 5,
    day: 1,
  };

  document.title = countdownInfo.name;

  return (
    <div className="App" style={{ background: "#4a0001" }}>
      <Birthday {...countdownInfo} />
      <Collage />
    </div>
  );
}

export default App;
