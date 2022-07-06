import React from 'react'
import { NavLink } from "react-router-dom";

export default function Breadecum(props) {

    return (
        <div className="pt-24 pb-8 mb-24 px-10 bg-green-500 text-white font-semibold text-lg ">
            <NavLink to={props.link} className="cursor-pointer hover:border-b-2 hover:border-b-white hover:text-xl transition-all duration-300 ease-in-out">{props.section}</NavLink> \ {props.title}
        </div>
    )
}

Breadecum.defaultProps = {
    title: 'Unknown',
    section: 'Home',
    link: '/',
}