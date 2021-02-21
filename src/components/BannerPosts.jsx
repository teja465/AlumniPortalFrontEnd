import React, { Component,useEffect,useState } from 'react'
import "./BannerPosts"
 const BannerPosts=()=>{
     const [lst, setlst] = useState([])

     const url="http://127.0.0.1:8000/banner_posts"
     useEffect(()=>{

        fetch(url).then(function(resp){
           resp.json().then((l)=>{
               console.log(l)
               setlst(l)
           })

        }).catch((err)=>{
            alert("error while fetching posts from database server ")
            
            
        })

     },[])




    return(
        <div style={{display:"flex",flexDirection:"col",flexWrap:"wrap"}}>

            {lst.map((item)=>{
                return (
                    <div style={{border:"1px solid black",margin:"20px 5px 20px 20px", maxHeight:"400px",maxWidth:"650px",backgroundColor:"white",overflow:"auto"}} > 
                        <div className="banner_post"  id="banner_post" >
                            <img src={item.img_url} alt="" className="bannerImg" height="200px" width="300px"/>
                            <h2>{item.title}</h2>
                            <p >{item.body}</p>
                        </div>
                    </div>
                )

            })}
        </div>

    )
}

export default BannerPosts