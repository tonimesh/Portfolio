import './App.css'
import ProjectCard from './Components/ProjectCard'
import Header from './Components/Header';
import Hero from './Components/Hero';
import 'bootstrap/dist/css/bootstrap.css';
import Floater from './Components/Floater';
import { useState, useCallback } from 'react';
import resume from './assets/Resume.pdf';
import Skill from './Components/Skill';
import Experience from './Components/Experience';
import About from './Components/About';
import Footer from './Components/Footer';
import pic from "./assets/Photo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import OwlCarousel from 'react-owl-carousel';
import Typist from 'react-typist-component';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function App() {
  const [isLight, setIsLight] = useState(false)
  const sentences = [
    'Software Engineer',
    'MCA Graduate',
    'Front-End Developer'
  ];
  const [sentanceId , setSentanceId] = useState(0);
  const[currentSentence,setCurrentSentence] =useState(sentences[sentanceId]);

  const changeSentance = () => {
    setSentanceId((prevId) => (prevId + 1) % sentences.length);
};



  const handleDownload = (e) => {
    e.preventDefault();
    const downloadFile = () => {
      const link = document.createElement('a');
      link.href = resume;
      link.download = 'Resume.pdf';

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically trigger the click event to start the download
      link.click();

      // Clean up: remove the link from the body
      document.body.removeChild(link);
    };

    downloadFile();
  }

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <div style={{ position: "absolute", bottom: 0, top: 0, left: 0, right: 0 }}>
        <Particles id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: isLight ? "#f5f5c5" : "#050505",
              },
            },
            fpsLimit: 120,
            // interactivity: {
            //     events: {
            //         onClick: {
            //             enable: true,
            //             mode: "push",
            //         },
            //         onHover: {
            //             enable: true,
            //             mode: "repulse",
            //         },
            //         resize: true,
            //     },
            //     modes: {
            //         push: {
            //             quantity: 4,
            //         },
            //         repulse: {
            //             distance: 200,
            //             duration: 0.4,
            //         },
            //     },
            // },
            particles: {
              color: {
                value: isLight ? "#F37335" : "#ffffff",
              },
              links: {
                color: isLight ? "#ada7f1" : "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                trail: true,
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className={"resume " + (isLight ? "light" : "dark")} style={{ position: "absolute", width: "100%" }}>
        <Header lightState={[isLight, setIsLight]} />

        {/* Body */}
        <Hero id="body" heading={
          <>
            {/* <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}> */}
            <Typist  onTypingDone={changeSentance}>
              Hi,
              <br /> This is Tonimesh Mondal!
              <br /> A{" "}
              {/* <Typist.Delay ms={1000} /> */}
           
                {currentSentence}
                {/* <Typist.Delay ms={2000} />
                <Typist.Backspace count={currentSentence.length} delay={2000} /> */}
              </Typist>
            {/* </Typist> */}

          </>
        }
          linkedin={"https://www.linkedin.com/in/tonimesh-mondal/"}
          github={"https://github.com/tonimesh"}
          gitlab={"https://gitlab.com/tonimeshm"}
        />

        {/* project list */}
        <h1 id="projects" className='gradient-h my-3 text-center'>Projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <OwlCarousel className='owl-theme' loop autoplay autoplayHoverPause autoplayTimeout={3000}
            autoplaySpeed={1000} margin={10} responsive={{
              0: {
                items: 1
              },
              480: {
                items: 2
              },
              769: {
                items: 3
              }

            }}
            animateOut={'fadeOut'}
            animateIn={'fadeIn'}
          >
            <ProjectCard
              imgSrc="./coffe-shop.PNG"
              title="Coffee Shop"
              desc="Developed a responsive and visually appealing website for a local coffee shop using HTML and CSS. The website aimed to showcase the shop's ambiance, menu offerings, and services. Incorporated a modern and inviting design with CSS Flexbox/Grid for layout structuring and responsiveness across various devices.
            Tech Stack-Html, Css"
              gitUrl="https://github.com/tonimesh/coffe-shop" webUrl="https://tonimesh.github.io/coffe-shop/"
            />

            <ProjectCard
              imgSrc="./waves-music-app.PNG"
              title="Waves Music"
              desc="The Waves Music App is a web application designed to provide users with a platform to listen , and organize their favorite music tracks.  The app offers a sleek and intuitive user interface . Responsive web app with Music Player and song library features.Users can create and upload their own songs. Work in progress.
              Tech Stack-Html, Css , Sass , React Js"
              gitUrl="https://github.com/tonimesh/react-player" webUrl="https://tonimesh.github.io/react-player/"
            />


            <ProjectCard
              imgSrc="./finder.png"
              title="Movie Finder"
              desc="The Movie Finder project is a web application that allows users to search for movies, view details about specific movies, and discover new movies based on genres, ratings, or release years. The application will utilize a third-party API to fetch movie data and display it to users in a user-friendly interface.
            Tech Stack-Html ,Css , JavaScript"
              gitUrl="https://github.com/tonimesh/movie-finder" webUrl="https://tonimesh.github.io/movie-finder/"
            />
            <ProjectCard
              imgSrc="./todo.PNG"
              title="To-Do List"
              desc=" Created a task management web application using HTML, CSS, and JavaScript. The app allows users to create, edit, and delete tasks, and incorporates a responsive design for seamless use across multiple devices.Integrated React.js components to enhance user experience and streamline task management features.
            Tech Stack-Html, Css, Bootstrap, React Js "
              gitUrl="https://github.com/tonimesh/to-do/tree/master" webUrl="https://tonimesh.github.io/to-do/"
            />
          </OwlCarousel>
        </div>

        {/* skills list */}
        <Skill />

        {/* cv */}
        <div className='button text-center mt-4' id="download">
          <a href="#" className='btn btn-dark' onClick={handleDownload}>Download My CV <span><FontAwesomeIcon icon={faDownload} /></span></a>
        </div>
        <br />

        <Experience
          experienceList={[
            {
              org: "Webstep Technologies",
              post: "Analyst Web Designer",
              span: "Dec 2023 - present",
              details: `Creating and managing App using HTML, CSS, JAVASCRIPT, REACT, REDUX, BOOTSTRAP and MATERIAL UI.
                \n I have work closely with senior developers and the development team to learn and enhance my skills.
                \nCreating reusable components to optimize code and speed of web app.
                \nCreating User Friendly UI with responsive design.`
            },
            {
              org: "CloudKaptan",
              post: "Software Engineer-Trainee",
              span: "May 2022 - Nov 2022",
              details: `Created Recruiting App using Salesforce Record Types, Custom Object, Salesforce Flow, Approval process, Email
                Alerts.\n
                 Apex Class and Test class Writing in project.\n
                Worked on a live project of an fin-tech Company.\n
                Creating User Friendly UI with responsive.`
            },
          ]}
        />

        <About
          pic={pic}
          about_text={
            `Hello, I'm Tonimesh Mondal, and I work as a front-end developer using React Js and learning MERN Stack. I have completed MCA  from Kalyani Govt. Engg. College, where I achieved a good CGPA of 9.28, I trained as a React.js developer at Step to Soft.
            I've also started learning about backend development with Node.js. My goal for the future is to become a skilled full-stack developer.
            I'm really passionate about web development. I enjoy learning about JavaScript and find satisfaction in solving web development challenges.`
          }
        />
        <Footer />
        <br />
        <span className='mt-4 ending mx-auto'>Developed by Tonimesh Mondal</span>

      </div>

    </>
  )
}

export default App
