import './App.css'
import ProjectCard from './Components/ProjectCard'
import Header from './Components/Header';
import Hero from './Components/Hero';
import 'bootstrap/dist/css/bootstrap.css';
import Floater from './Components/Floater';
import { useState } from 'react';
import resume from './assets/Resume.pdf';
import Skill from './Components/Skill';
import Experience from './Components/Experience';
import About from './Components/About';
import Footer from './Components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [isLight, setIsLight] = useState(false)

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


  return (
    <>
      <div className={"resume " + (isLight ? "light" : "dark")}>
        <Header lightState={[isLight, setIsLight]} />

        {/* Body */}
        <Hero id="body" heading={
          <>Hi,
            <br /> This is Tonimesh Mondal!
            <br /> A Front-End Developer</>
        }
          linkedin={"https://www.linkedin.com/in/tonimesh-mondal/"}
          github={"https://github.com/tonimesh"}
          gitlab={"https://gitlab.com/tonimeshm"}
        />

        {/* project list */}
        <h1 id="projects" className='gradient-h my-3 text-center'>Projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <ProjectCard
            imgSrc="./coffe-shop.PNG"
            title="Coffe Shop"
            desc="Developed a responsive and visually appealing website for a local coffee shop using HTML and CSS. The website aimed to showcase the shop's ambiance, menu offerings, and services. Incorporated a modern and inviting design with CSS Flexbox/Grid for layout structuring and responsiveness across various devices.
            Tech Stack-Html, Css"
            gitUrl="https://github.com/tonimesh/coffe-shop" webUrl="https://tonimesh.github.io/coffe-shop/"
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
        </div>

        {/* skills list */}
        <Skill />

        {/* cv */}
        <div className='button text-center mt-4' id="download">
          <a href="#" className='btn btn-dark' onClick={handleDownload}>Download My CV <span><FontAwesomeIcon icon={faDownload} /></span></a>
        </div>
        <br />

        <Experience 
          experienceList = {[
            {
                org:"Step to Soft",
                post:"Frontend Developer",
                span:"Dec 2022 - present",
                details:`Creating and managing App using HTML, CSS, JAVASCRIPT, REACT, REDUX, BOOTSTRAP and MATERIAL UI.
                \n I have work closely with senior developers and the development team to learn and enhance my skills.
                \nCreating reusable components to optimize code and speed of web app.
                \nCreating User Friendly UI with responsive design.`
            },
            {
                org:"CloudKaptan",
                post:"Software Engineer-Trainee",
                span:"May 2022 - Nov 2022",
                details:`Created Recruiting App using Salesforce Record Types, Custom Object, Salesforce Flow, Approval process, Email
                Alerts.\n
                 Apex Class and Test class Writing in project.\n
                Worked on a live project of an fin-tech Company.\n
                Creating User Friendly UI with responsive`
            },
          ]}
        />

        <About/>
        <Footer/>
        <br />
         <span className='mt-4 ending mx-auto'>Developed by Tonimesh Mondal</span>
         
      </div>

    </>
  )
}

export default App
