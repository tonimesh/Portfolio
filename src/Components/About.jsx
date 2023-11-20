import React from 'react'
import "./About.css"

function About({pic, about_text}) {
    return (
        <>
            <h1 id="about" className='gradient-h py-3 text-center'>About</h1>
            <div className="exp about col-10 m-auto">
                <div className='row'>
                    <div className="left col-12 col-sm-3 text-center mt-2 mb-2">
                        <img src={pic} />
                    </div>
                    <div className="right col-12 col-sm-9 ps-4">
                        <p>{about_text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About