import React from "react";
import './style.css'

import { FaPinterest, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () =>{
    return(
        <>
         {/* ----------------- Footer -------------- */}

        <footer>
        <div class="footer">

           <div class="footer-div-1">
           <h3>Foodish</h3>
           <p>Foodle &copy; 2023 all right reserved </p>

           <h3>Follow Us On</h3>
           <div className="footer-icons">
            <FaPinterest className="icon"/>
            <FaInstagram className="icon"/>
            <FaTwitter className="icon"/>
            <FaFacebook className="icon"/>
           </div>


           </div>

         <div class="footer-div-2">
           <h3>Menu</h3>
           <p>Home</p>
           <p>Offers</p>
           <p>Offers</p>
           <p>About Us</p>
         </div>

         <div class="footer-div-3">
           <h3>Information</h3>
           <p>Menu</p>
           <p>Quality</p>
           <p>Make a choice</p>
           <p>Salad With Vegetable</p>
           <p>Fast Delivery</p>
           <p>Subscribe</p>
         </div>

         <div class="footer-div-3">
           <h3>Contact</h3>
           <p>+123 456 789</p>
           <p>Explore</p>
           <p>info@foodish.com</p>
           <p>124, New York, USA</p>
         </div>

        </div>
        </footer>    

        
        
        
        </>
    )
}

export default Footer;