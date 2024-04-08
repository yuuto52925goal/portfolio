import React from 'react'
import "./Experience.css"

interface workType{
    title: string;
    time: string;
    place: string;
    description: string[];
}
interface detailType{
    detail: workType
}

function ExperienceCard({detail}:detailType) {
  return (
    <div className='work-experience-card-each'>
        <h3>{detail.title}</h3>
        <div className='duration-place'>
            <div className='work-place'>{detail.place}</div>
            <div className='word-duration'>{detail.time}</div>
        </div>
        <ul>
        {detail.description.map((des, index)=>(
           <li key={index}>{des}</li>
         ))}
        </ul>
    </div>
  )
}

export default ExperienceCard