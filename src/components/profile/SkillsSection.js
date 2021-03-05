import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'

import programmingLang from '../../static/img/pl.jpg'
import databasePhoto from '../../static/img/database.jpg'
import computerToolsPhoto from '../../static/img/computer-repair.png'
import ExperienceSection from './ExperienceSection'

import technologiesList from '../../data/technologies.js'

const SkillSection = () => {
  return (
    // , backgroundColor: '#F7F8FA'
    <div style={{ margin: '20px' }}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={4} style={{ paddingBottom: '30px' }}>
          <h2 style={{ textAlign: 'center' }}>Technologies</h2>
          <hr></hr>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Card className='shadow'>
              <Card.Body>
                {/* <Card.Title>Tech</Card.Title> */}
                <Card.Text>
                  <h5>
                    {technologiesList.map((tech) => (
                      <Badge style={{ margin: '3px' }} variant='dark'>
                        {tech}
                      </Badge>
                    ))}
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8}>
          <ExperienceSection></ExperienceSection>
        </Col>
      </Row>
    </div>
  )
}

export default SkillSection
