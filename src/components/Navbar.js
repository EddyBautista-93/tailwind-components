import React , { useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom'
import { Transition } from "@tailwindui/react";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const container = useRef(null);

    // allow for outside clicks 
    useEffect(() => {
        function handleOutsideClick(event) {
            if(!container.current.contains(event.target)){
                if(!isOpen) return;
                setIsOpen(false);
            }
        }
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [isOpen, container]);

    // allows use for 'esc' key 
    useEffect(() => {
        function handleEscape(event) {
          if (!isOpen) return;
    
          if (event.key === "Escape") {
            setIsOpen(false);
          }
        }
    
        document.addEventListener("keyup", handleEscape);
        return () => document.removeEventListener("keyup", handleEscape);
      }, [isOpen]);


    return (
        <nav  ref={container} className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
        role='navigation'>
            <Link to='/' className='pl-8'>
            <svg className="w-6 h-6" data-darkreader-inline-fill="" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
            <svg className="w-6 h-6"  fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </div>
            <div className='pr-8 md:block hidden'>
                <Link to='/' className='p-4'>Home</Link>
                <Link to='/menu' className='p-4'>Menu</Link>
                <Link to='/about' className='p-4'>About</Link>
                <Link to='/contact' className='p-4'>Contact</Link>
            </div>
        </nav>
    )
}


export default Navbar