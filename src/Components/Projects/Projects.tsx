import ProjectCard from "../ProjectsCard/ProjectCard"
import "./Projects.css"
import movie2 from "./Images/white.jpg"
import matchDark from "./Images/matchDark.jpg"
import React from 'react'
import gamer from "./Images/gamer.jpg"
import { PROJECTS } from "./data"

function Projects() {
  return (
    <div className="projects-show">
        <h1>Projects</h1>
        <section className="projects-section">
            <ProjectCard movie={movie2} addingClass="movie-trailer" detail={PROJECTS[0]}/>
            <ProjectCard movie={matchDark} addingClass="match-app" detail={PROJECTS[1]}/>
            <ProjectCard movie={gamer} addingClass="game-app" detail={PROJECTS[2]}/>
        </section>
    </div>
  )
}

export default Projects