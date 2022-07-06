import React, { useEffect, useState } from 'react'
import HomeLayout from '../../layout/home/HomeLayout'
import { useParams } from 'react-router-dom';

export default function Course() {

    const { name } = useParams();

    let courses = [
        {
            'query': 'webdesing',
            'name': 'Web Desining',
            'image': '/assets/image/course-1.jpg',
            'desc': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, reiciendis, sed soluta quis laboriosam reprehenderit dolorum corrupti iusto recusandae est error repudiandae sit officia obcaecati aut vel voluptatem quos accusamus.',
            'tab1': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque blanditiis omnis pariatur numquam quae iste nam illo asperiores explicabo corporis praesentium dolorum minima rem ex dicta, neque eos repellendus fuga.',
            'tab2': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolores voluptas illum debitis, illo nam minus dignissimos ipsum porro. Dolore quaerat numquam perspiciatis repellat, amet saepe impedit vero tenetur officiis soluta asperiores, ipsam est? Iusto saepe soluta accusamus nemo voluptatum.',
            'tab3': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eaque distinctio officiis a impedit iure ipsa iusto similique, nam qui!',
        },
        {
            'query': 'photoediting',
            'name': 'Photo Editing',
            'image': '/assets/image/course-2.jpg',
            'desc': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, reiciendis, sed soluta quis laboriosam reprehenderit dolorum corrupti iusto recusandae est error repudiandae sit officia obcaecati aut vel voluptatem quos accusamus.',
            'tab1': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque blanditiis omnis pariatur numquam quae iste nam illo asperiores explicabo corporis praesentium dolorum minima rem ex dicta, neque eos repellendus fuga.',
            'tab2': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolores voluptas illum debitis, illo nam minus dignissimos ipsum porro. Dolore quaerat numquam perspiciatis repellat, amet saepe impedit vero tenetur officiis soluta asperiores, ipsam est? Iusto saepe soluta accusamus nemo voluptatum.',
            'tab3': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eaque distinctio officiis a impedit iure ipsa iusto similique, nam qui!',
        },
        {
            'query': 'wifihacking',
            'name': 'Wifi Hacking',
            'image': '/assets/image/course-3.jpg',
            'desc': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, reiciendis, sed soluta quis laboriosam reprehenderit dolorum corrupti iusto recusandae est error repudiandae sit officia obcaecati aut vel voluptatem quos accusamus.',
            'tab1': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque blanditiis omnis pariatur numquam quae iste nam illo asperiores explicabo corporis praesentium dolorum minima rem ex dicta, neque eos repellendus fuga.',
            'tab2': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolores voluptas illum debitis, illo nam minus dignissimos ipsum porro. Dolore quaerat numquam perspiciatis repellat, amet saepe impedit vero tenetur officiis soluta asperiores, ipsam est? Iusto saepe soluta accusamus nemo voluptatum.',
            'tab3': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eaque distinctio officiis a impedit iure ipsa iusto similique, nam qui!',
        },
    ]

    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)

    const toggleTab1 = () => {
        setTab1(true)
        setTab2(false)
        setTab3(false)
    }

    const toggleTab2 = () => {
        setTab1(false)
        setTab2(true)
        setTab3(false)
    }

    const toggleTab3 = () => {
        setTab1(false)
        setTab2(false)
        setTab3(true)
    }

    const course = courses.filter(c => c.query === name)

    useEffect(() => {
        document.title = `Rahul Education - ${name}`;
    });

    return (
        course.map((c) => (
            <HomeLayout display={true} title={`Course \\ ${c.name}`} key={c.query}>
                <section className="section flex flex-col space-y-5 px-10">
                    <div className="image flex justify-center">
                        <img src={c.image} alt={c.image.toString()} className="rounded-md shadow-lg shadow-gray-500/40" />
                    </div>
                    <div className="title text-green-500 font-semibold text-2xl">{c.name}</div>
                    <div className="desc px-3 vsm:px-10 text-justify text-sm text-gray-500">{c.desc}</div>
                    <div className="tab">
                        <div className="tab-nav">
                            <ul className="flex space-x-3">
                                <li className="tab-nav-items hover:border-b-2 border-green-500 font-bold cursor-pointer hover:text-green-500" onClick={toggleTab1}>Overview</li>
                                <li className="tab-nav-items hover:border-b-2 border-green-500 font-bold cursor-pointer hover:text-green-500" onClick={toggleTab2}>Details</li>
                                <li className="tab-nav-items hover:border-b-2 border-green-500 font-bold cursor-pointer hover:text-green-500" onClick={toggleTab3}>Objectives</li>
                            </ul>
                        </div>
                        <div className="content p-5 border-t-2 border-gray-300 mt-5">
                            {
                                tab1 && <div className="tab-1 text-gray-500 text-sm">
                                    {c.tab1}
                                </div>
                            }
                            {
                                tab2 && <div className="tab-2 text-gray-500 text-sm">
                                    {c.tab2}
                                </div>
                            }
                            {
                                tab3 && <div className="tab-3 text-gray-500 text-sm">
                                    {c.tab3}
                                </div>
                            }
                        </div>
                    </div>
                </section>
            </HomeLayout>
        ))
    )
}
