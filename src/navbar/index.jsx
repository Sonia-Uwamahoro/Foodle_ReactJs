import React from "react";
import './style.css'


const Navbar = () =>{
    return(
        <>
        <nav class="nav-bar">
          <div class="nav">
             <input type="checkbox" id="nav-check"></input>

            <div class="nav-header">
              <div class="nav-title">
                <h1>Foodle</h1>
              </div>
            </div>

            <div class="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div class="nav-links">
                <a href="#" className="active">Home</a>
                <a href="#">Offer</a>
                <a href="#">Service</a>
                <a href="#">Menu</a>
                <a href="#">About Us</a>
            </div>

            <div className="nav-buttons">
              <button className="login">Login</button>
              <button className="signup">Sign Up</button>
            </div>

          </div>
        </nav>
        
        </>
       
    )
}

export default Navbar;