import React, { useEffect } from 'react'
import HomeLayout from '../../layout/home/HomeLayout'

export default function About() {

    let cards = [
        { 'image': 'assets/image/01.jpg', 'name': 'Rahul Das', 'post': 'C.E.O', 'comment': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, cum!' },

        { 'image': 'assets/image/trainer-1.jpg', 'name': 'Pradip Das', 'post': 'Project Manager', 'comment': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, cum!' },

        { 'image': 'assets/image/trainer-2.jpg', 'name': 'Arpita Das', 'post': 'Leader', 'comment': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, cum!' },

        { 'image': 'assets/image/trainer-3.jpg', 'name': 'Ravi Kundu', 'post': 'Accountent', 'comment': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, cum!' }
    ]

    useEffect(() => {
        document.title = 'Rahul Education - About';
    });

    return (
        <HomeLayout display={true} title='About'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-3 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="assets/image/about.jpg" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img src="assets/image/01.jpg" alt="profile" className="rounded-full" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="title-font mt-4 text-green-500 text-xl font-semibold">Phoebe Caulfield</h2>
                                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                                    <p className="font-bold text-gray-500">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4 font-bold text-gray-500">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="px-10 md:px-40 py-24 flex flex-wrap">
                    <h2 className="sm:text-3xl text-2xl text-green-500 font-semibold title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
                    <div className="md:w-3/5 md:pl-6">
                        <p className="leading-relaxed text-gray-500 font-bold">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
                    </div>
                </div>
            </section>

            <section className="px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-10">
                {
                    cards.map((card) => (<div className="border-2 rounded-lg p-5 space-y-5" key={card.name}>
                        <div className="image vsm:-mx-11">
                            <img src={card.image} alt="tainer1" className="w-16 h-16 rounded-md" />
                        </div>
                        <div className="content">
                            <div className="name font-semibold text-green-500 text-xl">{card.name}</div>
                            <div className="post font-bold text-lg text-gray-500">{card.post}</div>
                            <div className="comment text-justify mt-3 text-gray-500 font-bold text-sm italic">
                                <span className="before:content-['“'] text-7xl text-green-500"></span>
                                {card.comment}
                            </div>
                        </div>
                    </div>))
                }
            </section>
        </HomeLayout>
    )
}
