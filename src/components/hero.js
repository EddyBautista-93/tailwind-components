import React from "react";
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14"> Welcome to my Blog Styled with Tailwind and created with React!</h1>
                <Link className="py-6 px-10 rounded-full- text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce" to='/menu'>
                <svg className="w-16 h-16"  fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                </Link>
        </div>
    );
};



export default Hero;