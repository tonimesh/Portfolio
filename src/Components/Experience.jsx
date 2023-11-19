import React from 'react'
import "./Experience.css";

function Experience({experienceList}) {

    let experiences = experienceList.map((item,index) => (
        <div className='row' key={index}>
            <div className="left col-12 col-sm-3">
                <h3>{item.org}</h3>
                <p>{item.post}</p>
                <p>{item.span}</p>
            </div>
            <div className="right col-12 col-sm-9">
                <h4>Roles & Responsibility</h4>
                <p>{item.details}</p>
            </div>
        </div>
    ));

    return (
        <>
            <h1 id="experience" className='gradient-h py-3 text-center'>Experience</h1>
            <div className="exp col-10 m-auto">
                {experiences}
            </div>
        </>
    )
}

export default Experience