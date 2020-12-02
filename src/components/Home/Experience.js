import React from 'react'
import '../../static/css/Experience.css'

import '../../static/css/Cards.css'

import education from '../../data/education'
import jobs from '../../data/work'
const Experience = () => {
  return (
    <div style={{ backgroundColor: '#6ddeb1' }} className='cards'>
      <h1 style={{ fontSize: '60px' }}>Experience</h1>
      <div className='cards__container_experience'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='card'>
              <div className='container-experience'>
                <h2 style={{ textAlign: 'center' }}>
                  <b>
                    {' '}
                    <i class='fas fa-briefcase'></i> Work
                  </b>
                </h2>

                {jobs.map((job) => (
                  <div>
                    <br></br>
                    <hr></hr>
                    <p>{job.company}</p>
                    <p> {job.role}</p>
                    <p> {job.year}</p>

                    <hr></hr>
                    <br></br>
                  </div>
                ))}
              </div>
            </div>
            <div className='card'>
              <div className='container-experience'>
                <h2 style={{ textAlign: 'center' }}>
                  <b>
                    {' '}
                    <i class='fas fa-graduation-cap'></i> Education
                  </b>
                </h2>

                {education.map((educ) => (
                  <div>
                    <br></br>
                    <hr></hr>
                    <p>{educ.name}</p>
                    <p> {educ.course}</p>
                    <p> {educ.year}</p>

                    <hr></hr>
                    <br></br>
                  </div>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
