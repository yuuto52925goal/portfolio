import React from 'react'
import "./ProjectCard.css"
import { StaticImageData } from 'next/image'

interface ProjectCardProps{
    movie: StaticImageData;
    addingClass:string;
    detail: objectType
}

interface objectType{
    title: string;
    description: string[];
    link: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({movie, addingClass, detail}) => {

    const cardStyle = {
        width:"100%",
        height:"fit",
        backgroundImage: `url(${movie.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

  return (
    <div className={`projectCard ${addingClass}`} style={cardStyle}>
        <h3>{detail.title}</h3>
        <div className='project-content'>
            <p>{detail.description}</p>
            {detail.link? <a href={detail.link} className='ancher-link'><button>Go to page</button></a> : null}
        </div>
    </div>
  )
}

export default ProjectCard