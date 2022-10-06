import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/card";
import Header from "../Header/Header";


const Post=()=>{
    const [data,setdata]=useState([])
 useEffect( ()=>{
    async function fetchdata(){
        await axios.get("https://instaclone-node-api.herokuapp.com/api/v1/post").then(response=>{
            // console.log(response);   
        setdata((response.data.data).reverse())
           
        })
    }
   fetchdata()
    
 },[])

    return(
        <>
         <Header/>
         {
            data.map((post,i)=>{
                console.log(post.postImage.data.data)
                const base64string=btoa(String.fromCharCode(...new Uint8Array((post.postImage.data.data))))
                return (
                    
                    <div key={i}>
                        <Card post={post} base64string={base64string}/>

                    </div>
                )
                
                    
                
            })
         }
         
         </>
    )
}

export default Post