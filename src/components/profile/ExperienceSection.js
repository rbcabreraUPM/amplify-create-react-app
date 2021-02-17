import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import work from '../../data/work'
import jsonData from '../../data/education'
const ExperienceSection = () => {
  return (
    <Container>
      <br></br>
      <br></br>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ textAlign: 'center' }}>Work</h2>
          <hr></hr>{' '}
          <Row>
            {work.map((job) => (
              <Col xs={12} sm={12} md={6} lg={4}>
                <Card className='shadow ' style={{ margin: '10px' }}>
                  <Card.Img variant='top' src={`/img/${job.img}`} />
                  <Card.Body>
                    <Card.Title>{job.company}</Card.Title>
                    <Card.Text>
                      <div>
                        <span> {job.role}</span>
                        <br></br>
                        <span> {job.year}</span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ textAlign: 'center', paddingTop: '40px' }}>Education</h2>
          <hr></hr>{' '}
          <Row>
            {jsonData[1].map((education) => (
              <Col xs={12} sm={12} md={6} lg={4}>
                <Card className='shadow' style={{ margin: '10px' }}>
                  <Card.Img variant='top' src={`/img/${education.img}`} />
                  <Card.Body>
                    <Card.Title>{education.name}</Card.Title>
                    <Card.Text>
                      <div>
                        <span>{education.course}</span>
                        <br></br>
                        <span>{education.year}</span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ textAlign: 'center', paddingTop: '40px' }}>Training</h2>
          <hr></hr>{' '}
          <Row>
            {jsonData[0].map((training) => (
              <Col xs={12} sm={12} md={6} lg={4}>
                <Card className='shadow' style={{ margin: '10px' }}>
                  <Card.Img variant='top' src={`/img/${training.img}`} />
                  <Card.Body>
                    <Card.Title>{training.name}</Card.Title>
                    <Card.Text>
                      <div>
                        <span>{training.training}</span> <br></br>
                        <span> {training.year}</span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ExperienceSection
