import React, { Component } from 'react'
import Navbar from './Navbar'
import BannerPosts from "./BannerPosts";
export default function HomePage() {
    return (
        <div>
                
               



                <div className="bannerImg">
                    <img  id="banner" src="https://www.sreenidhi.edu.in/assets/images/sreenidhi-banner1.jpg" alt="oops" width="100%" />
                </div>
                <BannerPosts />

            
        </div>
    )
}
