'use client'
import { Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'

const Backtop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <Link href={'#'} className={`backtop ${visible ? 'show' : ''}`}><FaAngleUp /></Link>
    )
}

export default Backtop