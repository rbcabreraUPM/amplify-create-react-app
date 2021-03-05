import React from 'react'
import { Card, Container, Row, Col, Badge } from 'react-bootstrap'
import work from '../../data/work'
import jsonData from '../../data/education'
import '../../styles/components/experience.css'
const ExperienceSection = () => {
  return (
    <Container>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2 style={{ textAlign: 'center' }}>Experience</h2>
        <hr></hr>{' '}
        <Card className='shadow'>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className='mt-2 mb-2'>
                <Row>
                  <div className='col-md-12 offset-md-1'>
                    <ul className='timeline'>
                      {work.map((job) => (
                        <li>
                          <h5> {job.role}</h5>
                          <span>{job.company}</span>
                          <br></br>
                          <span> {job.year}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>

      <br></br>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2 style={{ textAlign: 'center' }}>Education</h2>
        <hr></hr>{' '}
        <Card className='shadow'>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className='mt-2 mb-2'>
                <Row>
                  <div className='col-md-12 offset-md-1'>
                    <ul className='timeline'>
                      {jsonData[1].map((education) => (
                        <li>
                          <h5> {education.name}</h5>
                          <span>{education.course}</span>
                          <br></br>
                          <span> {education.year}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>

      <br></br>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2 style={{ textAlign: 'center' }}>Training</h2>
        <hr></hr>{' '}
        <Card className='shadow'>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className='mt-2 mb-2'>
                <Row>
                  <div className='col-md-12 offset-md-1'>
                    <ul className='timeline'>
                      {jsonData[0].map((training) => (
                        <li>
                          <h5> {training.training}</h5>
                          <span>{training.name}</span>
                          <br></br>
                          <span> {training.year}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Container>
  )
}

export default ExperienceSection
