import "./createpost.css"
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Header from "../Header/Header";
const Createposts =()=>{
    const history=useNavigate()
    const [postDetailes,setPostDetailes]=useState({
        name:"",
        location:"",
        description:"",
        postImage:"",
    })
    
const config={
    headers:{
        "content-type":"multipart/form-data"
    }
}
 const   handleSubmit=async (e)=>{
   e.preventDefault();
  
  await axios.post("https://instaclone-node-api.herokuapp.com/api/v1/createpost",postDetailes,config).then((response)=>{
        console.log(response.data)
   })
  history("/post")
 }
 const handleChange=(e)=>{
  const  {name}=e.target;
  const {value}=e.target;
  setPostDetailes({...postDetailes,[name]:value})
 }
 const handlefile=(e)=>{
    setPostDetailes({...postDetailes, postImage:e.target.files[0]})
 }

    
return (
    <>
    <Header/>
    <div className="form-container">
        <h2>Create your Post</h2>
         <form method="POST" onSubmit={handleSubmit}>
            <div className="first-line"  >
                <input type="file" onChange={handlefile} />
            </div>
            <div >*Please upload image with less than 50kb</div>
            <div className="middle-line">
                <input type="text" name="name" value={postDetailes.name} placeholder="Author" onChange={handleChange}/>
                <input type="text" name="location" value={postDetailes.location} placeholder="Location" onChange={handleChange}/>
            </div>
            <div className="last-line">
                <input type="text" name="description" value={postDetailes.description} placeholder="Description" onChange={handleChange} />
            </div>
            <div className="btn-post">
            
            <button>Post</button>
           
            </div>
         </form>
    </div>
    </>
)
}
export default Createposts;