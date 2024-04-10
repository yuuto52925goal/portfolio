import ProjectCard from "../ProjectsCard/ProjectCard"
import "./Projects.css"
import movie2 from "./Images/white.jpg"
import matchDark from "./Images/matchDark.jpg"
import React from 'react'
import gamer from "./Images/gamer.jpg"

function Projects() {
  return (
    <div className="projects-show">
        <h1>Projects</h1>
        <section className="projects-section">
            <ProjectCard movie={movie2} addingClass="movie-trailer"/>
            <ProjectCard movie={matchDark} addingClass="match-app"/>
            <ProjectCard movie={gamer} addingClass="game-app"/>
        </section>
    </div>
  )
}

export default Projects