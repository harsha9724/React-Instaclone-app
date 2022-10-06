import { Link } from "react-router-dom"
import './landingPage.css'
const Landing = () => {
    return (
        <>
            <div className="container">
                <div id="left" className="banner">
                    <img src="./banner.png" alt="image" />
                </div>
                <div id="right" >
                    <h1>10x Team 04</h1>
                    <div className="btn">
                        <Link to="/post">
                            <button className="enter">
                                Enter
                            </button>
                        </Link>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Landing;