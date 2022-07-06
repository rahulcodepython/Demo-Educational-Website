import React from 'react'
import Home from './pages/home/Home';
import About from './pages/home/About';
import Courses from './pages/home/Courses';
import Events from './pages/home/Events';
import Pricing from './pages/home/Pricing';
import Contact from './pages/home/Contact';
import Arrow from './components/base/Arrow';
import Course from './pages/home/Course';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter className='App scroll-smooth'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/events' element={<Events />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/course/:name' element={<Course />} />
            </Routes>
            <Arrow />
        </BrowserRouter>
    )
}
