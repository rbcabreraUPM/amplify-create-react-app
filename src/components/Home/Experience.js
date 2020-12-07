import React from 'react'
import '../../static/css/Experience.css'

import '../../static/css/Cards.css'

import education from '../../data/education'
import jobs from '../../data/work'

const Experience = () => {
  return (
    <div style={{ backgroundColor: 'black' }} className='cards_custom'>
      <h1 style={{ fontSize: '60px', color: '#53f3b1' }}>Experience</h1>
      <div className='cards__container_experience_custom'>
        <div className='cards__wrapper_custom'>
          <ul className='cards__items_custom'>
            <div className='card_custom'>
              <div className='container-experience_custom'>
                <h2 style={{ textAlign: 'center' }}>
                  <b>
                    {' '}
                    <i className='fas fa-briefcase'></i> Work
                  </b>
                </h2>

                {jobs.map((job) => (
                  <div className='card_custom experience-card_custom'>
                    <div>
                      <dl>
                        <dt>{job.company}</dt>
                        <dd>- {job.role}</dd>
                        <dd>- {job.year}</dd>
                      </dl>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='card_custom'>
              <div className='container-experience_custom'>
                <h2 style={{ textAlign: 'center' }}>
                  <b>
                    {' '}
                    <i className='fas fa-graduation-cap'></i> Education
                  </b>
                </h2>

                {education[1].map((educ) => (
                  <div className='card_custom'>
                    <div>
                      <dl>
                        <dt>{educ.name}</dt>
                        <dd>- {educ.course}</dd>
                        <dd>- {educ.year}</dd>
                      </dl>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='card_custom'>
              <div className='container-experience_custom'>
                <h2 style={{ textAlign: 'center' }}>
                  <b>
                    {' '}
                    <i className='fas fa-desktop'></i> Training
                  </b>
                </h2>

                {education[0].map((training) => (
                  <div className='card_custom'>
                    <div>
                      <dl>
                        <dt>{training.name}</dt>
                        <dd>- {training.training}</dd>
                        <dd>- {training.year}</dd>
                      </dl>
                    </div>
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
