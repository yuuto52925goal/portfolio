"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from 'react'
import "./WorkExperience.css";
import { WORKS } from './dataWork';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import Slider from "react-slick";


function WorkExperience() {

    const sliderRef:any = useRef();

    const setting:any = {
        dots: false,
        infinite:false,
        speed: 500,
        slidesToShow:2,
        slideToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slideToScroll:1,
                },
            },
        ],
    };

    const slideRight= ()=>{
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

  return (
    <section className='experience-container'>
        <h3>Work Experience</h3>
        <div className='experience-card'>
            <div className="arrow-right" onClick={slideRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6751b9" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6751b9" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </div>
            <Slider ref={sliderRef} {...setting}>
            {WORKS.map((work, index)=>(
                <div key={index}>
                    <ExperienceCard detail={work} />
                </div>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience