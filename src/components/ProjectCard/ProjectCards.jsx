import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCards.scss"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Chip from '../Chip/Chip';
import { FaAccusoft, FaFolder } from 'react-icons/fa';


export const ProjectCard = ({ project }) => {
    const gotoSite = () => {
        const url = project.projectLink ? project.projectLink : project.githubLink;
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className='projectcard-container' onClick={gotoSite}>
            <div className='projectcard-logo-container'>
                {React.createElement(project.icon, { size: 32, className: 'projectcard-logo-container-logo' })}
                <div className='projectcard-logo-container-links'>
                    {project.githubLink ? <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}><FontAwesomeIcon icon={faGithub} size='lg' className='projectcard-title-icon' /></a> : null}
                    {project.projectLink ? <a href={project.projectLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' className='projectcard-title-icon' /></a> : null}
                </div>
            </div>
            <div className='projectcard-title-container'>
                <div className='projectcard-title-text'>{project.title}</div>
                <div className='projectcard-title-divider'></div>
            </div>

            <div className='projectcard-description'>{project.description}</div>
            <div className='projectcard-tech-container'>
                {
                    project.tech.map((tech, idx) => (
                        <Chip key={idx} text={tech} />
                    ))
                }
            </div>
        </div>
    )
}


const ProjectCards = ({ projects }) => {
    return (
        <div className='projectcards'>
            {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
        </div>
    );
}

export default ProjectCards;