import React, { useState } from 'react';

// Swiper
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// Icons
import CompanyIcon1 from '../../assets/icons/company1.svg';
import CompanyIcon2 from '../../assets/icons/company2.svg';
import CompanyIcon3 from '../../assets/icons/company3.svg';
import CompanyIcon4 from '../../assets/icons/company4.svg';

const Companies = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 8,
        },
        loop: true,
        breakpoints: {
            "(min-width: 510px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 900px)": {
                slides: { perView: 3, spacing: 15 },
            },
            "(min-width: 1200px)": {
                slides: { perView: 4, spacing: 20 },
            },
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <section className='companies-section'>
            <div className="container">
                <div className="companies-section__content navigation-wrapper">
                    <br />
                    <h2>Только проверенные бренды</h2>
                    <article ref={sliderRef} className='keen-slider'>
                        <div className='keen-slider__slide number-slide1'>
                            <img src={CompanyIcon1} alt="company icon" />
                        </div>
                        <div className='keen-slider__slide number-slide2'>
                            <img src={CompanyIcon2} alt="company icon" />
                        </div>
                        <div className='keen-slider__slide number-slide3'>
                            <img src={CompanyIcon3} alt="company icon" />
                        </div>
                        <div className='keen-slider__slide number-slide4'>
                            <img src={CompanyIcon4} alt="company icon" />
                        </div>
                        <div className='keen-slider__slide number-slide3'>
                            <img src={CompanyIcon3} alt="company icon" />
                        </div>
                        <div className='keen-slider__slide number-slide4'>
                            <img src={CompanyIcon4} alt="company icon" />
                        </div>
                        <div className='keen-slider__slide number-slide3'>
                            <img src={CompanyIcon3} alt="company icon" />
                        </div>
                        <div className='keen-slider__slide number-slide4'>
                            <img src={CompanyIcon4} alt="company icon" />
                        </div>

                    </article>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                    {loaded && instanceRef.current && (
                        <div className="dots">
                            {[
                                ...Array(instanceRef.current.track.details.slides.length).keys(),
                            ].map((idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx)
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "")}
                                    ></button>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Companies;


function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
            )}
            {!props.left && (
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
            )}
        </svg>
    )
}