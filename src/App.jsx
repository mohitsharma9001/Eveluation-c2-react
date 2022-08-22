import Slide from "./Components/Slide";
import "./App.css";
import React from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {

  const [page,setPage] = React.useState(1)



 
  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      <Slide page={page}/>
      <button data-cy="prev" onClick={()=>setPage(page-1)} disabled = {page === 1} >Prev</button>
      <button data-cy="next" onClick={()=>setPage(page+1)} >Next</button>
    </div>
  );
}
// disabled={Math.ceil(totalItem)}
