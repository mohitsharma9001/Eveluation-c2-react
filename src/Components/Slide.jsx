import React from "react";
function Slide({page}) {
  // console.log(page)
  const [loding,setLoding] = React.useState(false)
  const [error,setError] = React.useState(false)
   const [data,setData] = React.useState([])
  //  const [totalItem,setTotalItem] = React.useState(0)

  React.useEffect(()=>{
    fetchAndUpdateData()
  },[page])

  const fetchAndUpdateData = ()=>{
    setLoding(true)
    fetch(`https://slides-app-220822.herokuapp.com/slides?_page=${page}&_limit=1`)
    .then((res)=>{
      // let total = res.headers.get("X-Total-Count")
      // setTotalItem(+total)
     return res.json()
    })
    .then((res)=>setData(res))
    .catch((err)=>setError(true))
    .finally(()=>setLoding(false))
   
  } 
  return loding ? (
    <h1>LOADING...</h1>
  ) : error ? (
    <h1>SOMETHING WENT WRONG</h1>
  ) : (
    <div className="slide-container" data-cy="slide" >
      {data.map((data1)=>(
        <h3 data-cy="title" key={data1.id}>{data1.title}</h3>
      
      ))}
       {data.map((data1)=>(
        <p data-cy="description" key={data1.id}>{data1.description}</p>
      
      ))}
 
    </div>
        
  );
}

export default Slide;
