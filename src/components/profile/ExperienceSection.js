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
        <Col xs={12} sm={12} md={6} lg={4}>
          <h2 style={{ textAlign: 'center' }}>Work</h2>
          <hr></hr>{' '}
          {work.map((job) => (
            <Card style={{ margin: '10px' }}>
              <Card.Body>
                <Card.Title>{job.company}</Card.Title>
                <Card.Text>
                  <div>
                    <dl>
                      <dd>- {job.role}</dd>
                      <dd>- {job.year}</dd>
                    </dl>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <h2 style={{ textAlign: 'center' }}>Education</h2>
          <hr></hr>{' '}
          {jsonData[1].map((education) => (
            <Card style={{ margin: '10px' }}>
              <Card.Body>
                <Card.Title>{education.name}</Card.Title>
                <Card.Text>
                  <div>
                    <dl>
                      <dd>- {education.course}</dd>
                      <dd>- {education.year}</dd>
                    </dl>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <h2 style={{ textAlign: 'center' }}>Training</h2>
          <hr></hr>{' '}
          {jsonData[0].map((training) => (
            <Card style={{ margin: '10px' }}>
              <Card.Body>
                <Card.Title>{training.name}</Card.Title>
                <Card.Text>
                  <div>
                    <dl>
                      <dd>- {training.training}</dd>
                      <dd>- {training.year}</dd>
                    </dl>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default ExperienceSection
