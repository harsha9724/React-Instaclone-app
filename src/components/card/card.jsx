import "./card.css"
import { BiPaperPlane } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai";

const Card=({post,base64string})=>{
// const data=props.data;
console.log(post,base64string)
    return(
        <>
        {/* <div>hello</div> */}
        <div className="card">
        <section className="top-container">
        <div className="name-location left">
            <div className="name">{post.name}</div>
            <div className="location">{post.location}</div>
        </div>
        <div className="right">
        <i class="fa fa-ellipsis-h" aria-hidden="true" style={{fontSize:"35px"}}></i>
        </div>
        </section>
        <div className="middle-container">
            <img src={`data:image/png;base64,${base64string}`} alt="" />
        </div>
        <section className="bottom-container">
            <div className="top">
                <div>
                   <span className="heart"><AiOutlineHeart style={{fontSize:"35px"}}/></span> 
                    <span><BiPaperPlane style={{fontSize:"35px"}}/></span>
                <div className="likes">{post.likes}<span> likes</span></div>

                </div>
                <div>
                    {post.date}
                </div>
            </div>
            <h5 >{post.description}</h5>
        </section>
    </div>
    </>
    )

 }
export default Card