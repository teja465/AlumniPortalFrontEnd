import React, { Component,useEffect,useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import Showpost from "./Showpost"

export default function Posts() {
    const [posts, setposts] = useState([])
    const url="http://127.0.0.1:8000/posts"
    useEffect(()=>{
        fetch(url).then((resp)=>{
            resp.json().then((data)=>{
                setposts(data)
            })

        }).catch((err)=>{
            alert("Error while feching posts from backend sereve")
        })

    },[])
    
    
    return (
        <div>
            <h1>This is posts page</h1>
            {posts.length===0?"No posts to show":""}
            {posts.map((post,index)=> <Showpost post_={post} />)}
        </div>
    )
}
