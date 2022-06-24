import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";


function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="f-heading">
      <h1>Features</h1>
      <p>Here are some features of the Software</p>
    </div>
    <Features/>
    <Subscribe/>
    </div>
  );
}

export default App;
