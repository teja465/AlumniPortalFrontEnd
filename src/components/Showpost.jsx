
import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import Card from "./Card"

export default function Showpost(props) {
    const post=props.post_
    return (
        <div style={{backgroundColor:"skyblue",border:"1px solid black",margin:"10px"}}>
            {console.log("In postShow",post)}
            <Card  post={post}/>
           
            <br/>
            
        </div>
    )
}
