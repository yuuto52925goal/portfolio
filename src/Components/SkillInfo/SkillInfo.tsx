import React from 'react'
import "./SkillInfo.css"

interface propsType{
    heading: string,
    skills: skillArray[]
}

interface skillArray{
    skill: string;
    percentage: number|string;
}

function SkillInfo({heading, skills}:propsType) {
  return (
    <div className='skills-info-card'>
        <h3>{heading}</h3>
        <div className='skills-info-content'>
            {skills.map((skill, index)=>(
                <div key={index}>
                    <div className='skills-info-element'>
                        <p>{skill.skill}</p>
                        <p className='percentage'>{skill.percentage}%</p>
                    </div>
                     <div className='skill-progress-div'>
                        <div className='skill-progress' style={{width: `${skill.percentage}%`}}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkillInfo