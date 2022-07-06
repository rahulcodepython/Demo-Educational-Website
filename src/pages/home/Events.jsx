import React, { useEffect } from 'react'
import HomeLayout from '../../layout/home/HomeLayout';

export default function Events() {

    let events = [
        {
            'image': 'assets/image/events-1.jpg',
            'title': 'School Event',
            'date': '20/12/11/ at 5am',
            'details': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et autem aliquam voluptatem labore dolor officiis, perspiciatis quam necessitatibus sint consequuntur at debitis velit temporibus, blanditiis cumque qui, nemo enim ipsam? Corporis, expedita doloremque odit quod ipsa eum saepe odio quam.'
        },

        {
            'image': 'assets/image/events-2.jpg',
            'title': 'Party Event',
            'date': '20/12/11/ at 5am',
            'details': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et autem aliquam voluptatem labore dolor officiis, perspiciatis quam necessitatibus sint consequuntur at debitis velit temporibus, blanditiis cumque qui, nemo enim ipsam? Corporis, expedita doloremque odit quod ipsa eum saepe odio quam.'
        },

    ]

    useEffect(() => {
        document.title = 'Rahul Education - Events';
    });

    return (
        <HomeLayout display={true} title='Events'>
            <section className="pt-3 mx-10 md:mx-20 lg:mx-40 grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-5">
                {
                    events.map((event) => (
                        <div className="event-card w-full" key={event.title}>
                            <div className="image">
                                <img src={event.image} alt="" className="w-[100%] rounded-md" />
                            </div>
                            <div className="content text-center py-10 mx-20">
                                <div className="title font-semibold text-3xl text-green-500">{event.title}</div>
                                <div className="date font-bold text-gray-500 italic">{event.date}</div>
                                <div className="details font-bold text-sm text-gray-500 mt-5">{event.details}</div>
                            </div>
                        </div>))
                }
            </section>
        </HomeLayout>
    )
}
