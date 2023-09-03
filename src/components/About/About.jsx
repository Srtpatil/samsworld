import React from 'react';
import Chip from "../Chip/Chip";
import List from "../List/List";
import "./About.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FaCentos, FaCss3 } from 'react-icons/fa';
import { SiAnsible, SiArchlinux, SiGit, SiMongodb, SiMysql, SiNeovim, SiPostman, SiTypescript } from 'react-icons/si';
import { BiLogoAngular, BiLogoDocker, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoKubernetes, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandAngular, TbBrandCpp, TbBrandCss3, TbBrandDjango, TbBrandReactNative, TbBrandTypescript } from 'react-icons/tb';

const Tech = [ 
  {
    text: "Typescript",
    icon: TbBrandTypescript
  },
  {
    text: "Java",
    icon: BiLogoJava
  },
  {
    text: "Python",
    icon: BiLogoPython
  },
  {
    text: "C/C++",
    icon: TbBrandCpp
  },
  {
    text: "Angular",
    icon: TbBrandAngular
  },
  {
    text: "React",
    icon: BiLogoReact
  },
  {
    text: "React Native",
    icon: TbBrandReactNative
  },
  {
    text: "Django",
    icon: TbBrandDjango
  },
  {
    text: "MySQL",
    icon: SiMysql
  },
  {
    text: "PostgreSQL",
    icon: BiLogoPostgresql
  },
  {
    text: "MongoDB",
    icon: SiMongodb
  },
  {
    text: "Docker",
    icon: BiLogoDocker
  },
  {
    text: "Kubernetes",
    icon: BiLogoKubernetes
  },
  {
    text: "Ansible",
    icon: SiAnsible
  },
]

const Tools = [
  {
    text: "Git",
    icon: SiGit
  },
  {
    text: "NeoVim",
    icon: SiNeovim
  },
  {
    text: "Linux",
    icon: SiArchlinux
  },
  {
    text: "Postman",
    icon: SiPostman
  },
]

const Activities = [
  "Playing Video Games ...",
  "Reading Novels ...",
  "Binging through Anime ..."
]

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-container-left'>
        <p>
          Hey! I'm Samarth, if you haven't already gathered that by now. I'm a software engineer from Pune, India. 
          I do full stack primarily with React/Angular and Django, but love building with whatever tools are right for the job.
        </p>
        <p>My focus these days is building automation tools and dashboards at <a href="https://www.veritas.com/" target="_blank" rel="noreferrer">Veritas Technologies</a></p>
        <p>Outside of work, You can find me,</p>
        <List items={Activities}/>
      </div>
      <div className='about-container-right'>
        <div className='about-container-right-container'>
          <div className='about-container-right-title'>
            <FontAwesomeIcon icon={faCode} size='sm' style={{color: "var(--green)"}}/> Tech I know
          </div>
          <div className='about-container-right-chips'>{Tech.map((item, i) => {
            return <Chip icon={item.icon} text={item.text} key={i} />
          })}</div>
        </div>
        <div>
          <div className='about-container-right-title'>
            <FontAwesomeIcon icon={faToolbox} size='sm' style={{color: "var(--green)"}}/> Tools I Use
          </div>
          <div className='about-container-right-chips'>{Tools.map((item, i) => {
            return <Chip text={item.text} icon={item.icon} key={i} />
          })}</div>
        </div>
      </div>

    </div>
  )
}

export default About
