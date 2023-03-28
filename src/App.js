import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{paddingLeft:"30%", marginTop:"10%",paddingRight:"30%"}}>

   <h1 style={{backgroundColor:"steelblue"}}>Home Page</h1>
      {/* <Link to="/">Home</Link><br/> */}
      
      <Link to="/filter">Filter</Link><br/>
      <Link to="/counter">Counter</Link><br/>
      <Link to="/timer">Timer</Link><br/>
      <Link to="/about">About</Link><br/>
    
    </div>
  );
}



export default App;




