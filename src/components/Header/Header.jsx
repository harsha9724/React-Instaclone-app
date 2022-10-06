import { Link } from "react-router-dom"
import "./Header.css"
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
              <img src="./icon.svg" alt="icon" />
              <span className="icon-name">Instaclone</span>
            </div>
            <div className="camera">
                <Link to="/createpost">
                    <img src="./camera.png" alt="camera" />
                </Link>                
            </div>
        </div>
    )
}

export default Header