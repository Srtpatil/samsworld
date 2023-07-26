import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import { ReactComponent as BackgroundImage } from "./assets/bg4.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from './components/Button/Button'
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./App.scss"
import SectionHeader from './components/SectionHeader/SectionHeader';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import PageLoading from './components/PageLoading/PageLoading';
import TimeLine from './components/TimeLine/TimeLine';
import ProjectCards from './components/ProjectCard/ProjectCards';
import About from './components/About/About';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { FaCode, FaFolder, FaUserAstronaut } from 'react-icons/fa';
import { GiMaze } from 'react-icons/gi';
import { SiBrandfolder, SiMicrodotblog } from 'react-icons/si';
import ResumeButton from './components/ResumeButton';
import { EMAIL, GITHUB_LINK, LEETCODE_LINK, LINKEDIN_LINK } from './constants';


const Projects = [
  {
    title: "Sam's World",
    description: "Personal portfolio website made with react, you are viewing it right now !",
    githubLink: "https://github.com",
    projectLink: "https://srtpatil.github.io",
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

function App() {
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, []);

  return (
    <>
      <PageLoading loading={loading} />
      <div className='site-container'>
        <Navbar />
        <main className='site-content'>
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
                  I am a skilled software engineer with a passion for solving complex problems and creating innovative solutions :).
                  Currently working at <a href="https://www.veritas.com/" target="_blank" rel="noreferrer">Veritas Technologies</a>.</p>
              </div>

              <div className='site-hero-socials'>
                {
                  socials.map((social, idx) => {
                    return (<a href={social.link} key={idx} target='_blank' rel="noreferrer">
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

        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
