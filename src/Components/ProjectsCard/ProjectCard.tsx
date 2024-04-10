import React from 'react'
import "./ProjectCard.css"
import { StaticImageData } from 'next/image'

interface ProjectCardProps{
    movie: StaticImageData;
    addingClass:string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({movie, addingClass}) => {

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
        <h3>Project Title</h3>
        <div className='project-content'>
            <p>Developed and launched own Saas product, generating one million yen on contest<br/>Constructed a movie trailer software application including 133,000 movies<br/>Established React framework to implement search function, API key, and movie contents<br/>Built database at Firebase to execute login and register function, saving movies for watch list, and deleting movies from watch list for any users</p>
        </div>
    </div>
  )
}

export default ProjectCard