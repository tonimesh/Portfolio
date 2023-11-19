import React from 'react'
import pic from "../assets/Photo.jpg"
import "./About.css"

function About() {
    return (
        <>
            <h1 id="about" className='gradient-h py-3 text-center'>About</h1>
            <div className="exp about col-10 m-auto">
                <div className='row'>
                    <div className="left col-12 col-sm-3 text-center mt-2 mb-2">
                        <img src={pic} />
                    </div>
                    <div className="right col-12 col-sm-9 ps-4">
                        <p>
                            Hello, I'm Tonimesh Mondal, and I work as a front-end developer using React Js and learning MEARN Stack. I have completed MCA  from Kalyani Govt. Engg. College, where I achieved a good CGPA of 9.2, I had the opportunity to intern as a React.js developer at Step to Soft.
                            I've also started learning about backend development with Node.js. My goal for the future is to become a skilled full-stack developer.
                            I'm really passionate about web development. I enjoy learning about JavaScript and find satisfaction in solving web development challenges.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About