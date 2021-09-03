import React from "react";
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                <Link className="py-6 px-10 bg-yellow-500 rounded-full- text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce" to='/menu'>
                    Order Now(' ')
                    <svg className="w-6 h-6" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </Link>
            </h1>
        </div>
    );
};

export default Hero;