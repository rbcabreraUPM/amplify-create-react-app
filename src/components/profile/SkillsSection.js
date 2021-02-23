import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

import programmingLang from '../../static/img/pl.jpg'
import databasePhoto from '../../static/img/database.jpg'
import computerToolsPhoto from '../../static/img/computer-repair.png'
import ExperienceSection from './ExperienceSection'
const SkillSection = () => {
  return (
    // , backgroundColor: '#F7F8FA'
    <div style={{ padding: '20px' }}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={3} style={{ paddingBottom: '30px' }}>
          <h2 style={{ textAlign: 'center' }}>Skills</h2>
          <hr></hr>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Card className='shadow'>
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

          <Col xs={12} sm={12} md={12} lg={12}>
            <Card className='shadow'>
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

          <Col xs={12} sm={12} md={12} lg={12}>
            <Card className='shadow'>
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
        </Col>
        <Col xs={12} sm={12} md={12} lg={9}>
          <ExperienceSection></ExperienceSection>
        </Col>
      </Row>
    </div>
  )
}

export default SkillSection
