import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

import programmingLang from '../../static/img/pl.jpg'
import databasePhoto from '../../static/img/database.jpg'
import computerToolsPhoto from '../../static/img/computer-repair.png'
const ExperienceSection = () => {
  return (
    //backgroundColor: '#e9ecef'
    <div style={{ padding: '20px' }}>
      <Container>
        <h2 style={{ textAlign: 'center' }}>Skills</h2>
        <hr></hr>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Card className='shadow-lg '>
              <Card.Body>
                <Card.Title>Programming Languages</Card.Title>
                <Card.Text>
                  <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4}>
            <Card className='shadow-lg '>
              {/* <Card.Img variant='top' src={databasePhoto} /> */}
              <Card.Body>
                <Card.Title>Database</Card.Title>
                <ul>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Firebase</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4}>
            <Card className='shadow-lg '>
              {/* <Card.Img variant='top' src={computerToolsPhoto} /> */}
              <Card.Body>
                <Card.Title>Others</Card.Title>
                <ul>
                  <li>Chatfuel</li>
                  <li>Unity</li>
                  <li>Docker</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ExperienceSection
