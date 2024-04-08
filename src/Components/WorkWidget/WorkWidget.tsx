import React from 'react'
import tu2 from "./Images/Tutor-Japan.jpeg"
import tu1 from "./Images/Math-Tutor.jpeg"
import { StaticImageData } from 'next/image';
import Image  from 'next/image';
import "./WordWidget.css"


export default function WorkWidget() {
    const tutor1 = ["Tutored more than 10 college students in Math to further deepen understanding of college Algebra discrete math and Calculus",
    "Communicated efficiently with students to arrange tutor session"];
    const tutor2 = ["Tutored 15+ junior high students in Japan with understanding mathematical concepts such as algebrageometry and fractions boosting students success",
"Instructed 10+ junior high school students in Japan learn using English tools such as grammar and pronunciation to enhance English-speaking skills",
"Taught students test preparation techniques increasing student success by 8 %"];
    
    const experience = (preps:string,pic:StaticImageData,p1:string,p2:string,p3:string)=>{
        return (
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">{preps}</h1>
                        <p className="lead">{p1}<br/>{p2}<br/>{p3}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <Image className="job-pic rounded-lg-3" src={pic} alt="" width="720"/>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <>
        {experience("Computer Science and Math Tutor",tu1,tutor1[0],tutor1[1], "")}
        {experience("Math and English Tutor",tu2,tutor2[0],tutor2[1],tutor2[2])}
        </>
    )
}

