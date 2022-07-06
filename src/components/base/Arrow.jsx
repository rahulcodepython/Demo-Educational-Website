import React, { useState } from 'react'

export default function Arrow() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true)
        }
        else if (scrolled <= 100) {
            setVisible(false)
        }
    };

    const toggleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="bg-green-500 text-white text-xl text-center fixed bottom-[24px] right-[23px] rounded-md px-[0.7rem] py-[0.3rem] cursor-pointer" onClick={toggleScroll} style={{ display: visible ? 'inline' : 'none' }}>
            <span className="font-extrabold">&uarr;</span>
        </div>
    )
}
