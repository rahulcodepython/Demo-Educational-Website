import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {

    let links = [
        { 'name': 'Home', 'a': '/' },
        { 'name': 'Services', 'a': '/' },
        { 'name': 'Courses', 'a': '/' },
        { 'name': 'About', 'a': '/' },
        { 'name': 'Contact', 'a': '/' }
    ]

    let services = [
        { 'name': 'Web Development', 'a': '/' },
        { 'name': 'Graphics Design', 'a': '/' },
        { 'name': 'Hacking', 'a': '/' },
        { 'name': 'Markting', 'a': '/' }
    ]

    let icons = [
        { 'icon': <BsFacebook />, 'name': 'fb', 'a': '/' },
        { 'icon': <BsTwitter />, 'name': 'twi', 'a': '/' },
        { 'icon': <BsInstagram />, 'name': 'insta', 'a': '/' },
        { 'icon': <BsLinkedin />, 'name': 'linked', 'a': '/' },
    ]

    return (
        <div className="mt-40">
            <div className="footer bg-gray-50 px-10 sm:px-20 md:px-40 py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-5 xl:gap-y-0">
                <div className="description space-y-5">
                    <div className="title text-2xl font-semibold text-green-500">Rahul</div>
                    <div className="desc font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, odio. <br />
                    </div>
                    <div className="contact font-bold">
                        <div className="phone text-sm">
                            <span className="text-base font-semibold text-green-500">Phone : </span>
                            +91123456789
                        </div>
                        <div className="email text-sm">
                            <span className="text-base font-semibold text-green-500">Email : </span>
                            rahulprofession01@gmail.com
                        </div>
                    </div>
                </div>

                <div className="tab1">
                    <div className="title text-2xl font-semibold text-green-500 mb-5">Useful Links</div>
                    <div className="links">
                        <ul>
                            {
                                links.map((link) => (
                                    <li className="space-x-2" key={link.name}>
                                        <span className="text-green-500">&gt;</span>
                                        <a href={link.a}>{link.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="tab2">
                    <div className="title text-2xl font-semibold text-green-500 mb-5">Our Services</div>
                    <div className="links">
                        <ul>
                            {
                                services.map((service) => (
                                    <li className="space-x-2" key={service.name}>
                                        <span className="text-green-500">&gt;</span>
                                        <a href={service.a}>{service.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="subscribe space-y-5">
                    <div className="title font-bold text-xl text-green-500">Join Our Newsletter</div>
                    <div className="desc text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam.</div>
                    <div className="form">
                        <input type="text" className="w-full h-12 rounded-full mb-3 border-2 outline-none px-3" />
                        <div className="btn bg-green-500 text-white px-4 py-3 w-full rounded-full text-center font-semibold">Subscribe</div>
                    </div>
                </div>
            </div>

            <div className="copyright bg-gray-100 flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between px-10 py-5 items-center">
                <div className="copyright-text text-sm">
                    <div className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus.</div>
                    <div className="designer">Copyright 2022 Desinged by <span className="font-bold text-green-500">Rahul Das</span></div>
                </div>
                <div className="social flex space-x-3 text-2xl text-white pr-7">
                    {
                        icons.map((icon) => (
                            <a href={icon.a} key={icon.name}>
                                <div className="icon bg-green-500 rounded-full p-2 text-sm">{icon.icon}</div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
