import React from 'react'
import Navbar from '../../components/home/Navbar'
import Breadecum from '../../components/base/Breadecum';
import Footer from '../../components/home/Footer';

export default function HomeLayout(props) {

    return (
        <React.Fragment>
            <Navbar />
            {props.display && <Breadecum title={props.title} section='Home' link='/' />}
            {props.children}
            <Footer />
        </React.Fragment>
    )
}
