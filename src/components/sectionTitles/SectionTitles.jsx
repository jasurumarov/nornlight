import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const SectionTitles = ({ title, btnName, navigate: navigateLink }) => {
    const navigate = useNavigate()
    return (
        <div className="section__title">
            <h2>{title}</h2>
            <button onClick={() => navigate(navigateLink)}>{btnName} <GoArrowRight /></button>
        </div>
    )
}

export default SectionTitles