import React, { useState } from 'react'
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    let links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Courses", link: "/courses" },
        { name: "Pricing", link: "/pricing" },
        { name: "Events", link: "/events" },
        { name: "Contact", link: "/contact" },
        { name: "Rahul Das", link: "/" },
    ];

    return (
        <div className='shadow-md w-full fixed z-50'>
            <div className='lg:flex items-center justify-between bg-white py-3 lg:px-10'>
                <div className="logo text-3xl tracking-widest text-green-500 uppercase font-extrabold leading-3 p-4">
                    Rahul
                </div>
                <nav>
                    <ul className={`lg:flex lg:items-center lg:pb-0 absolute lg:static bg-white lg:z-auto w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                        {links.map((link) => (
                            <li key={link.name} className='lg:ml-8 text-sm lg:my-0 my-7'>
                                <NavLink to={link.link} className='hover:text-green-500 hover:border-b-2 hover:border-green-500 hover:text-2xl border-0 cursor-pointer font-bold duration-300 transition-all ease-in-out translate-y-5'>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer lg:hidden'>
                    <span>
                        {open ? <VscChromeClose /> : <VscMenu />}
                    </span>
                </div>
            </div>
        </div>
    )
}