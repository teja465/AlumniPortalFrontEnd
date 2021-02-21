import React from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';

function handleOnClick(value){
  const url="http://127.0.0.1:8000/add_post"
    console.log("changed",value)
    fetch(url,{
      method:"POST",
      body: JSON.stringify({ 
        data:value
    }), 

    }).then((msg)=>{
      alert("posted addded")
      window.location="/"
    })
    .catch((err)=>{
      alert("error while adding post to backend server")
    })
    

}


export default function App() {
  const [value, setValue] = React.useState("**saikrihna TRS!!!**");
  function handleOnChange(value){
    setValue(value)

}
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={handleOnChange}
      />
      
    {/* <MDEditor.Markdown source={value} /> */}
     <button onClick={()=>handleOnClick(value)}>Post</button>
    </div>
  );
}