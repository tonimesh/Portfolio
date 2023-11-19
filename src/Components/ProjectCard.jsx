import React from 'react'
import './ProjectCard.css'

function ProjectCard({
  title,
  desc,
  imgSrc,
  gitUrl,
  webUrl
}) {
  return (
    <div className="projectCard m-2 p-2 py-5 text-center">
      <img src={imgSrc} alt={title} className='m-4' />
      <h2>{title}</h2>
      
      <p className='text-justify'>
        {desc}
      </p>
      
      <div className='buttons row justify-content-center'>
      {
          gitUrl && 
          <a href={gitUrl} target='_blank'>
            <button className='btn col-4 btn-dark mx-2'>Code</button>
          </a>
        }

        {
          webUrl && 
          <a href={webUrl} target='_blank'>
            <button className='btn col-4 btn-dark mx-2'>View</button>
          </a>
        }
      </div>
    </div>

  )
}

export default ProjectCard