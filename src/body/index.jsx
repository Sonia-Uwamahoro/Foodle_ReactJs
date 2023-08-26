import React from "react";
import './style.css'
import {Menus} from "../menu-categories/index"
import Navbar from "../navbar";
import Footer from "../footer";
import { FaShoppingBag,FaPlay, FaShippingFast, FaAirFreshener, FaHamburger, FaAngleRight, FaStar } from "react-icons/fa";


const Body = () =>{
    return(
        <>
        <div className="whole-component">
        <Navbar/>
        {/* ------------ Home ------------- */}
        <div className="home">
        <div className="home-div">
            <div className="home-div-1">
                <h1>All Fast Food
                <br/>
                Available at <b>Foodle</b>
                </h1>
                <span>
                    <img src="./images/img2.jpg" alt="" />
                    <p>We Are Just A Click Away When You
                        <br/>
                        Crave For Delicious Fast Food
                    </p>
                </span>
                <div className="home-buttons">
                    <button className="bag"><FaShoppingBag className="bag-icon"/>Buy Now</button>
                    <button className="play"><FaPlay className="play-icon"/>How To Order</button>
                </div>
            </div>
            <div className="home-div-2">
                <img src="./images/img1.png" alt=""/>
            </div>

        </div>
        </div>

{/* ------------------- Our Services ----------------------- */}
    <div class="our-services">

      <div class="intro">
          <div>
              <FaShippingFast className="s-icon"/>
              <span>
                  <h1>Fast Delivery</h1>
                  <p>The food will be delivered to
                    <br/>
                    your home within 1-2 hours of
                    <br/>
                    your ordering
                  </p>
              </span>
          </div>
      </div>

      <div class="intro">
          <div>
              <FaHamburger className="s-icon"/>
              <span>
              <h1>Fresh Food</h1>
                  <p>
                    Your food will be derivered 
                    <br/>
                    100% fresh to your home. we
                    <br/>
                    do not deliver stale food
                  </p>
              </span>
          </div>
      </div>

      <div class="intro">
          <div>
              <FaAirFreshener className="s-icon"/>
              <span>
              <h1>Free Delivery</h1>
                  <p>Your food delivery is
                    <br/>
                    absolute free. no cost
                    <br/>
                    just order and enjoy
                  </p>
              </span>
          </div>
      </div>
  </div>
  


{/* ------------------- Categories ----------------------- */}

<div className="categories-div">
    <div className="categories">
        
        <div className="cot-sub-div-1">
             <h1>Best <b>Delivered</b>
                <br/>
                Categories
             </h1>
        </div>
        <div className="cot-sub-div-2">
        <p>
         Here are some of our best distributed
        <br/>
        categories. If you want you can orders
        <br/>
        from here.
        </p>
        </div>
    </div>

    <div className="categories-div-2">
        <div className="cot-sub-div-3">
            <img src="./images/img3.png" alt="" />
            <h1>Chicken Burger</h1>
            <span>Order Now <FaAngleRight className="cat-icon"/></span>
        </div>
        <div className="cot-sub-div-4">
        <div className="cot-sub-div-3">
            <img src="./images/img4.png" alt="" />
            <h1>Chicken Pizza</h1>
            <span>Order Now <FaAngleRight className="cat-icon"/></span>
        </div>
        </div>
        <div className="cot-sub-div-5">
        <div className="cot-sub-div-3">
            <img src="./images/img5.png" alt="" />
            <h1>French Fries</h1>
            <span>Order Now <FaAngleRight className="cat-icon"/></span>
        </div>
        </div>


    </div>
</div>

  {/* ------------------- Menu ----------------------- */}
  <div className="menu">
    <div className="menu-div-1">
        <div className="menu-1">
        <h1>
            Our <b>Regular</b> Menu
        </h1>
        <p>these are our regular menus. you can
            <br/>
            order anything you like.
        </p>
    </div>
    <div className="menu-2">
        <button>See All</button>
    </div>
    </div>

    <div className="menu-div-2">
      {Menus.map((menu, index) => (
        <div className="m-div-1" key={index}>
          <img src={menu.img} alt="" />
          <h1>{menu.heading}</h1>
          <div className="m-div">
            <span className="m-icons">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </span>
            <p>{menu.rating}</p>
          </div>
          <div className="m-bottom">
            <h1>{menu.price}</h1>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
</div>

  </div>

  {/* -------------------  Discount ----------------------- */}
  <div className="discount">
    <div className="discount-div-1" style={{ backgroundImage: `url("./images/img7.jpg")` }}>
        <h1>
            25%
            <br/>
            Discount
        </h1>
    </div>
    <div className="discount-div-2">
    <div className="discount-div-1" style={{ backgroundImage: `url("./images/img8.jpg")` }} id="discount-side" >
        <h1>
            Save
            <br/>
            20%
        </h1>
    </div>
    <div className="discount-div-1" style={{ backgroundImage: `url("./images/img9.jpg")` }}id="discount-side" >
        <h1>
            25%
            <br/>
            Off
        </h1>
    </div>
        
    </div>
  </div>
  </div>

<Footer/>
        </>
    )

}

export default Body;






















