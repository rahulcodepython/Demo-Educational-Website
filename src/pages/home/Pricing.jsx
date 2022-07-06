import React, { useEffect } from 'react'
import HomeLayout from '../../layout/home/HomeLayout';

export default function Pricing() {

    let prices = [
        {
            'type': 'low',
            'popular': false,
            'price': '28',
            'facilities': ['Very Good Course', 'Relevant Course', 'Easy To Learn'],
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, earum.'
        },
        {
            'type': 'standard',
            'popular': true,
            'price': '38',
            'facilities': ['Very Good Course', 'Relevant Course', 'Easy To Learn', 'Deep Learning'],
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, earum.'
        },
        {
            'type': 'professional',
            'popular': false,
            'price': '48',
            'facilities': ['Very Good Course', 'Relevant Course', 'Easy To Learn', 'Deep Learning', 'Gaurented Placement'],
            'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, earum.'
        },
    ]

    useEffect(() => {
        document.title = 'Rahul Education - Pricing';
    });

    return (
        <HomeLayout display={true} title='Contact Us'>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 pt-3 mx-3 sm:mx-10 md:mx-20 lg:mx-30 mb-20">
                {
                    prices.map((price) => (
                        <div className="w-full" key={price.type}>
                            <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                                {price.popular && <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl font-bold">POPULAR</span>}
                                <h2 className="tracking-widest title-font mb-1 font-semibold">{price.type.toUpperCase()}</h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span className="font-extrabold text-green-500">${price.price}</span>
                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <div className="mb-2">
                                    {
                                        price.facilities.map((facilitie) => (<p className="flex items-center text-gray-600 mb-2" key={facilitie}>
                                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3 text-white" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>
                                            <span className="text-lg font-bold">{facilitie}</span>
                                        </p>))
                                    }
                                </div>
                                <button className="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded font-bold">Enroll Now
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p className="text-gray-500 mt-3 font-bold text-sm">{price.desc}</p>
                            </div>
                        </div>))
                }
            </section>
        </HomeLayout>
    )
}
