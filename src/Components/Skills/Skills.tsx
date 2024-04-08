"use client";
import React, { useState } from 'react'
import { SKILLS } from './data'
import "./Skills.css"
import SkillInfo from '../SkillInfo/SkillInfo';

interface list{
  title:string;
  icons:React.ReactNode;
  skills:skillArray[];
}

interface skillArray{
  skill: string;
  percentage: number;
}


export default function Skills() {

  const [active, setActive] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSkill = (skill:list)=>{
    setSelectedSkill(skill);
  }

  return (
    <div className='skill-container'>
      <h5>Technical Proficiency</h5>
      <div className='skill-content'>
        <div className='skills-show'>
        {SKILLS.map((skill, index)=>(
          <div className={`skill-card ${active ? "active": ""}`} key={index} onClick={()=> handleSkill(skill) }>
            <div className='skill-icon'>
              {skill.icons}
            </div>
            <span>
              {skill.title}
            </span>
          </div>
        ))}
        </div>
        <div className='skill-info'>
          <SkillInfo heading={selectedSkill.title} skills={selectedSkill.skills}/>
        </div>
      </div>
    </div>
  )
}
