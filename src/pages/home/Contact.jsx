import React, { useEffect } from 'react'
import { BsGeoAlt, BsWhatsapp, BsEnvelope } from "react-icons/bs";
import HomeLayout from '../../layout/home/HomeLayout';

export default function Contact() {

    let icons = [
        { 'icon': <BsGeoAlt />, 'title': 'Location', 'content': '123/1 xyz, ABC, West Bengal, PIN - 123456' },
        { 'icon': <BsWhatsapp />, 'title': 'Whatsapp', 'content': '+91123456789' },
        { 'icon': <BsEnvelope />, 'title': 'EMail', 'content': 'rahulprofession01@gmail.com' },
    ]

    useEffect(() => {
        document.title = 'Rahul Education - Contact Us';
    });

    return (
        <HomeLayout display={true} title='Contact Us'>
            <section className="contact mt-2 flex flex-wrap flex-col md:flex-row mx-5 sm:mx-10 md:mx-20">
                <div className="icons flex flex-col space-y-5 w-full md:w-1/3 justify-around px-10">
                    {
                        icons.map((icon) => (
                            <div className="icons w-full p-10 rounded-md flex" key={icon.title}>
                                <div className="icon text-2xl bg-green-50 rounded-full p-6 text-green-500 hover:bg-green-500 hover:text-white">{icon.icon}</div>
                                <div className="text ml-3">
                                    <div className="title font-bold text-green-500 text-xl">{icon.title}:</div>
                                    <div className="content font-bold text-gray-500 text-sm italic">{icon.content}</div>
                                </div>
                            </div>))
                    }
                </div>

                <form action="" className="form bg-green-50 p-7 w-full md:w-2/3">
                    <div className="field flex flex-col justify-around space-y-5 mt-2 p-5">
                        <div className="input-group flex justify-between items-center space-x-3">
                            <div className="name w-1/2">
                                <input type="text" name="name" id="name" className="w-full border-b-2 border-l-2 border-green-200 px-5 py-3 font-bold italic rounded-md outline-none" placeholder='Enter your name' />
                            </div>
                            <div className="email w-1/2">
                                <input type="email" name="email" id="email" className="w-full border-b-2 border-l-2 border-green-200 px-5 py-3 font-bold italic rounded-md outline-none" placeholder='Enter your email' />
                            </div>
                        </div>
                        <div className="mobile">
                            <input type="number" name="mobile" id="mobile" className="w-full border-b-2 border-l-2 border-green-200 px-5 py-3 font-bold italic rounded-md outline-none" placeholder='Enter your mobile' />
                        </div>
                        <div className="desc">
                            <textarea name="desc" id="desc" cols="30" rows="10" className="w-full border-b-2 border-l-2 border-green-200 px-5 py-3 font-bold italic rounded-md outline-none" placeholder='What you want to tell ?'></textarea>
                        </div>
                    </div>
                    <div className="btn text-center">
                        <button type="submit" className="bg-green-500 text-white font-semibold px-7 py-3 rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out">Send Message</button>
                    </div>
                </form>
            </section>
        </HomeLayout>
    )
}
