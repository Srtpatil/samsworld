import React from 'react'
import "./Home.scss"

import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import { ReactComponent as BackgroundImage } from "../../assets/bg4.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SectionHeader from '../SectionHeader/SectionHeader';
import Footer from '../Footer/Footer';
import PageLoading from '../PageLoading/PageLoading';
import TimeLine from '../TimeLine/TimeLine';
import ProjectCards from '../ProjectCard/ProjectCards';
import About from '../About/About';
import { FaCode, FaUserAstronaut } from 'react-icons/fa';
import { GiMaze } from 'react-icons/gi';
import { SiMicrodotblog } from 'react-icons/si';
import ResumeButton from '../ResumeButton';
import { EMAIL, GITHUB_LINK, LEETCODE_LINK, LINKEDIN_LINK } from '../../constants';
import Page from '../Layout/Page/Page';
import Content from '../Layout/Content/Content';
import Cat from '../Cat/Cat'

const Projects = [
  {
    title: "Sam's World",
    description: "Personal portfolio website made with react, also contains blogging feature, you are viewing it right now !",
    githubLink: "https://github.com/Srtpatil/samsworld",
    icon: FaUserAstronaut,
    tech: [
      "React",
      "SCSS",
    ]
  },
  {
    title: "Maze Creator/Solver",
    description: "A simple webpage that generates 2D maze using backtracking algorithm and also solves the maze highlighting the path.",
    githubLink: "https://github.com/Srtpatil/Maze-Generator-React",
    projectLink: "https://maze-generator-solver.netlify.app",
    icon: GiMaze,
    tech: [
      "React",
      "DFS"
    ]
  },
  {
    title: "Online Code Editor",
    description: "An online tool to write your codes and excute them. \
                Supports creation of sharable link and embedding of editor. \
                Supports C++, C, Python",
    githubLink: "https://github.com/Srtpatil/Code-Editor",
    icon: FaCode,
    tech: [
      "React",
      "Node",
      "MongoDB",
      "Docker"
    ]
  },
  {
    title: "Blog Project",
    description: " A blog site made with react. \
                  Homepage contains latest posts. \
                  User can bookmark post and also draft a post while writing.",
    githubLink: "https://github.com/Srtpatil/Blog_Frontend",
    icon: SiMicrodotblog,
    tech: [
      "React",
      "Node",
      "MySQL"
    ]
  },
]

const Home = () => {
  const socials = [
    {
      link: LEETCODE_LINK,
      icon: faCode
    },
    {
      link: GITHUB_LINK,
      icon: faGithub
    },
    {
      link: LINKEDIN_LINK,
      icon: faLinkedin
    },
    {
      link: `mailto:${EMAIL}`,
      icon: faEnvelope
    },
  ]
  return (
    <>
      <PageLoading />
      <Page>
        <Navbar />
        <Content>
          {/* Hero Section */}
          <div className='site-hero-container'>
            <div className='site-hero-content'>
              <div className='site-hero-introduction'>
                <h1 className='site-hero-introduction-text'>Hi, my name is,</h1>
              </div>

              <div className='site-hero-name'>
                <h1 className='site-hero-name-text'>Samarth Patil.</h1>
              </div>

              <div className='site-hero-description'>
                <p className='site-hero-description-text'>
                  Welcome to my little corner of the internet!
                  I am a skilled software engineer with a passion for solving complex problems and creating innovative solutions :) <br />
                  Currently building stuff for <a href="https://www.getcerta.com/" target="_blank" rel="noopener noreferrer">Certa</a>.</p>
              </div>

              <div className='site-hero-socials'>
                {
                  socials.map((social, idx) => {
                    return (<a href={social.link} key={idx} target='_blank' rel="noopener noreferrer">
                      <FontAwesomeIcon icon={social.icon} size='lg' className='site-hero-socials-item' />
                    </a>)
                  })
                }
              </div>

              <div className='site-hero-action'>
                <ResumeButton />
              </div>
            </div>

            <div className='site-hero-image'>
              <BackgroundImage style={{ maxHeight: "300px" }} />
            </div>

            <div className='site-hero-scroll-container'>
              <span>SCROLL</span>
              <div></div>
            </div>
          </div>

          {/* About Section */}
          <div className='site-about-container' id='about'>
            <SectionHeader title="About" />
            <About />
          </div>

          {/* Experience Section */}
          <div className='site-experience-container' id='experience'>
            <SectionHeader title="Experience" align="left" />
            <TimeLine />
          </div>

          {/* Projects Section */}
          <div className='site-projects-container' id='projects'>
            <SectionHeader title="Projects" align="left" />
            <ProjectCards projects={Projects} />
          </div>

          {/* Contact Me Section */}
          <div className='site-contact-container' id='contact'>
            <SectionHeader title="Get In Touch" align="center" />
            <Contact />
          </div>
        </Content>
        <Footer />
      {/* <Cat /> */}
      </Page>
    </>
  )
}

export default Home;
