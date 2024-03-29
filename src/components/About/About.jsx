import React from 'react';
import Chip from "../Chip/Chip";
import List from "../List/List";
import "./About.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { SiAnsible, SiArchlinux, SiGit, SiMongodb, SiMysql, SiNeovim, SiPostman } from 'react-icons/si';
import { BiLogoDocker, BiLogoGoLang, BiLogoKubernetes, BiLogoPostgresql, BiLogoPython, BiLogoReact } from 'react-icons/bi';
import { TbBrandAngular, TbBrandCpp, TbBrandDjango, TbBrandGolang, TbBrandReactNative, TbBrandTypescript } from 'react-icons/tb';

const Tech = [ 
  {
    text: "Typescript",
    icon: TbBrandTypescript
  },
  {
    text: "Python",
    icon: BiLogoPython
  },
  {
    text: "Golang",
    icon: BiLogoGoLang
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
          Hey! I'm Samarth, if you haven't already gathered that by now. I'm a software engineer, 
          I do full stack primarily with React/Angular and Django/Go, but love building with whatever tools are right for the job.
        </p>
        <p>These days, building stuff for <a href="https://www.getcerta.com/" target="_blank" rel="noopener noreferrer">Certa</a>, primarily with Django and Golang.</p>
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
