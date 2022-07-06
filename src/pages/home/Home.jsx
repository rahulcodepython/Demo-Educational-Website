import React, { useEffect } from 'react'
import { VscPreview } from "react-icons/vsc";
import { BiArea, BiCategoryAlt, } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import HomeLayout from '../../layout/home/HomeLayout';

export default function Home() {

    let counts = [
        { 'name': 'Students', 'number': '600' },
        { 'name': 'Courses', 'number': '20' },
        { 'name': 'Events', 'number': '5' },
        { 'name': 'Trainers', 'number': '10' }
    ]

    let cards = [
        {
            'icon': <VscPreview />,
            'title': 'First Card Title',
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, modi!'
        },
        {
            'icon': <BiCategoryAlt />,
            'title': 'Second Card Title',
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, modi!'
        },
        {
            'icon': <BiArea />,
            'title': 'Third Card Title',
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, modi!'
        },
    ]

    let teams = [
        {
            'id': 1,
            'image': 'assets/image/trainer-1.jpg',
            'name': 'Rahul Das',
            'post': 'C.E.O',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis?',
            'fbLink': '',
            'twiLink': '',
            'instaLink': '',
            'linkedIn': ''
        },
        {
            'id': 2,
            'image': 'assets/image/trainer-2.jpg',
            'name': 'Arpita Das',
            'post': 'Project Manager',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis?',
            'fbLink': '',
            'twiLink': '',
            'instaLink': '',
            'linkedIn': ''
        },
        {
            'id': 3,
            'image': 'assets/image/trainer-3.jpg',
            'name': 'Pradip Das',
            'post': 'Financial Head',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, veritatis?',
            'fbLink': '',
            'twiLink': '',
            'instaLink': '',
            'linkedIn': ''
        },
    ]

    let steps = [
        {
            'id': 1,
            'image': 'assets/image/step1.png',
            'title': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, saepe. do'
        },
        {
            'id': 2,
            'image': 'assets/image/step2.png',
            'title': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, saepe. spchte'
        },
        {
            'id': 3,
            'image': 'assets/image/step3.png',
            'title': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, saepe. hyte'
        },
        {
            'id': 4,
            'image': 'assets/image/step4.png',
            'title': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, saepe. consider'
        },
    ]

    let items = [
        { 'name': 'Web Development' },
        { 'name': 'Email Marketing' },
        { 'name': 'Graphics Designing' },
        { 'name': 'Video Editing' },
        { 'name': 'Marketing' }
    ]

    useEffect(() => {
        document.title = 'Rahul Education - Home';
    });

    return (
        <HomeLayout display={false}>
            <section id='hero' className="hero px-10 bg-center sm:bg-top md:bg-fixed bg-cover h-[100vh] sm:h-[80vh]" style={{ 'backgroundImage': "url('assets/image/hero-bg.jpg')" }}>
                <div className="content sm:px-20 md:px-32 lg:px-56 pt-40 pb-20">
                    <div className="title text-white font-extrabold text-4xl">
                        Learning Today, <br />
                        Leading Tomorrow
                    </div>
                    <div className="desc text-white font-semibold text-base py-10 w-full md:w-1/2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam aspernatur quibusdam ea fugiat, mollitia nulla esse commodi eligendi facilis placeat?
                    </div>
                    <a href='/about'>
                        <button className='hover:bg-green-600 hover:border-green-600 border-2 rounded-full transition-all duration-300 ease-in text-white text-base md:text-xl font-semibold px-5 py-3'>
                            Get Started
                        </button>
                    </a>
                </div>
            </section>

            <section className="text-gray-600 py-10 body-font">
                <div className="container mx-auto flex px-5 -py-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 transition-all duration-300 ease-in  hover:text-green-500 cursor-pointer">Before they sold out
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed font-bold text-sm">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="assets/image/about.jpg" />
                    </div>
                </div>
            </section>

            <section className="counter py-5 bg-gray-100 grid-cols-2 grid md:grid-cols-4 mb-32">
                {counts.map((count) => (
                    <div key={count.name} className={`${count.name} flex flex-col items-center text-2xl font-semibold hover:text-green-500 transition-all duration-300 ease-in cursor-pointer mb-5 md:mb-0`}>
                        <span>{count.number}</span>
                        <span>{count.name}</span>
                    </div>
                ))}
            </section>

            <section className="card flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 px-10 my-32">
                <div className="intro flex flex-col items-stretch w-full md:justify-between md:py-52 lg:py-[30px] md:w-1/2 ld:1/3 bg-green-500 p-[30px]">
                    <h2 className="text-white font-semibold text-3xl mb-[30px]">Why choose Mentor ?</h2>
                    <h4 className="text-white font-bold mb-[30px] text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nesciunt delectus eius ea autem dicta animi reiciendis nihil hic ullam aut laudantium aperiam voluptatibus perspiciatis, temporibus dolore maiores? Quae, sequi!
                    </h4>
                    <div className="btn text-center">
                        <button className="text-black font-bold bg-green-100 border-green-100 border-2 rounded-full hover:bg-green-300 hover:border-green-300 transition-all duration-300 ease-in cursor-pointer px-4 py-[10px] text-center">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="cards flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">
                    {
                        cards.map((card) => (<div key={card.title} className="card-1 p-4 w-full lg:w-1/3 flex flex-col justify-center items-center border-2 rounded">
                            <div className="logo mb-5 bg-gray-200 rounded-full p-5 text-xl text-green-500">{card.icon}</div>
                            <div className="title mb-5 text-2xl font-semibold text-green-500">{card.title}</div>
                            <div className="content text-center font-bold text-gray-500 text-sm">{card.content}</div>
                        </div>))
                    }
                </div>
            </section>

            <section className="my-32">
                <div className="flex px-10 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="assets/image/joinus.jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center md:items-end">
                        <h1 className="sm:text-4xl text-3xl mb-4 font-semibold text-green-500">
                            Why you should choose us ?
                        </h1>
                        <p className="mb-8 leading-relaxed font-bold text-sm text-gray-500 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nobis. Reprehenderit molestiae dolorum vitae atque, aliquid hic nemo tempora soluta mollitia sit. Enim dolore hic, itaque quod consectetur molestiae vitae?
                        </p>
                    </div>
                </div>
            </section>

            <section className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-5 my-32 px-10 items-center">
                {
                    items.map((item) => (
                        <div className="text-center border-2 border-gray-300 text-bold text-green-500 text-lg p-5 rounded-lg w-auto font-semibold" key={item.name}>
                            {item.name}
                        </div>

                    ))
                }
            </section>

            <section className="team px-10 my-32">
                <div className="team-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:px-20 my-5 gap-7">
                    {
                        teams.map((team) => (<div key={team.id} className="team-card-1 shadow-xl rounded-md">
                            <div className="image">
                                <img src={team.image} alt="" className="w-full rounded-t-md" />
                            </div>
                            <div className="details m-5">
                                <div className="title text-xl font-semibold text-green-500">{team.name}</div>
                                <div className="post text-lg font-bold my-3">{team.post}</div>
                                <div className="about text-center font-bold text-gray-400 text-sm">{team.desc}</div>
                                <div className="social-links flex justify-center items-center space-x-3 my-3 text-xl">
                                    <a href={team.fbLink} className="text-sm text-white bg-green-500 rounded-full p-3"><span><BsFacebook /></span></a>
                                    <a href={team.twiLink} className="text-sm text-white bg-green-500 rounded-full p-3"><span><BsTwitter /></span></a>
                                    <a href={team.instaLink} className="text-sm text-white bg-green-500 rounded-full p-3"><span><BsInstagram /></span></a>
                                    <a href={team.linkedIn} className="text-sm text-white bg-green-500 rounded-full p-3"><span><BsLinkedin /></span></a>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </section>

            <section className="steps flex flex-wrap justify-around px-5 sm:px-10 md:px-20 sm:space-x-0 my-32">
                {
                    steps.map((step) => (
                        <div className="step-1 w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0" key={step.title}>
                            <div className="image">
                                <img src={step.image} alt="" />
                            </div>
                            <div className="title font-bold text-lg px-5">
                                <span className="text-lg text-green-500">Step {step.id} : </span>
                                {step.title}
                            </div>
                        </div>
                    ))
                }
            </section>

            <section className="text-gray-600 body-font my-32">
                <div className="container px-5 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-sm font-bold text-gray-500">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                        <h2 className="text-gray-500 font-semibold title-font tracking-wider text-lg italic">HOLDEN CAULFIELD</h2>
                        <p className="text-green-500 font-bold text-lg">Senior Product Designer</p>
                    </div>
                </div>
            </section>
        </HomeLayout>
    )
}