import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const myAlert = () => {

    return(
        document.write(" this is a signup page ")

        // <>
        //     <form>
        //         <input placeholder="entre name "> </input>
        //         <input placeholder="entre name "> </input>
        //     </form>
        // </>
    )

}


function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="nav-div1">
                    <ul>                     

                    <Link to="/" > Home</Link>
                    <Link to="/card" > About</Link>    
                    <br></br>
                        {/* <a href="/" ><li>Home</li></a>
                        <a href="/card" ><li>About</li></a> */}
                        <li>Contact</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="nav-div2">
                    <span onClick={myAlert} ><Link to="" >Signup</Link></span>

                    <span><Link to="/Signup" >Signin</Link></span>
                </div>
            </nav>


        </>
    


    )
}

export default Nav