import React, { useEffect } from 'react'
import { BiHappy } from "react-icons/bi";
import HomeLayout from '../../layout/home/HomeLayout';
import { NavLink } from "react-router-dom";

export default function Courses() {

    let courses = [
        {
            'id': 1,
            'image': 'assets/image/course-1.jpg',
            'type': 'UI Desinger',
            'price': '100',
            'title': 'Web Design',
            'link': '/course/webdesing',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nostrum?',
            'trainerImage': 'assets/image/trainer-1.jpg',
            'trainerName': 'Rahul Das',
            'purches': '20',
        },
        {
            'id': 2,
            'image': 'assets/image/course-2.jpg',
            'type': 'Graphics Design',
            'price': '300',
            'title': 'Photo Editing',
            'link': '/course/photoediting',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nostrum?',
            'trainerImage': 'assets/image/trainer-2.jpg',
            'trainerName': 'Arpita Das',
            'purches': '50',
        },
        {
            'id': 3,
            'image': 'assets/image/course-3.jpg',
            'type': 'Hacking',
            'price': '200',
            'title': 'Wifi Hacking',
            'link': '/course/wifihacking',
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nostrum?',
            'trainerImage': 'assets/image/trainer-3.jpg',
            'trainerName': 'Pradip Das',
            'purches': '10',
        }
    ]

    useEffect(() => {
        document.title = 'Rahul Education - Courses';
    });

    return (
        <HomeLayout display={true} title='Courses'>
            <section className="courses px-10">
                <div className="course-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 md:px-20 my-5 gap-7">
                    {
                        courses.map((course) => (
                            <div key={course.id} className={`card-${course.id} w-full shadow-xl rounded-md`}>
                                <div className="image">
                                    <img src={course.image} alt="" className="rounded-t-md" />
                                </div>
                                <div className="details px-7 py-5">
                                    <div className="type flex flex-col vsm:flex-row justify-between py-3">
                                        <button className="bg-green-500 text-white font-semibold p-2 rounded">
                                            {course.type}
                                        </button>
                                        <div className="pricing font-bold text-xl">
                                            &#8377;{course.price}
                                        </div>
                                    </div>
                                    <NavLink to={course.link} className="title font-semibold text-xl text-gray-500 hover:text-green-500 transition-all ease-in-out duration-300 hover:text-3xl">
                                        {course.title}
                                    </NavLink>
                                    <div className="content text-justify my-2 font-bold text-sm">
                                        {course.desc}
                                    </div>
                                    <div className="footer flex justify-between items-center border-t-2 pt-3">
                                        <div className="teacher flex items-center space-x-3">
                                            <img src={course.trainerImage} alt="" className="w-8 rounded-full mr-0" />
                                            <span className="font-semibold text-lg text-green-500">{course.trainerName}</span>
                                        </div>
                                        <div className="enrolled flex items-center space-x-3">
                                            <BiHappy />
                                            <span className="ml-0">{course.purches}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </HomeLayout>
    )
}
