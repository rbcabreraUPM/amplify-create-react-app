import React from 'react'
import { CardDeck, Card, Container } from 'react-bootstrap'

import programmingLang from '../../static/img/pl.jpg'
import databasePhoto from '../../static/img/database.jpg'
import chatPhoto from '../../static/img/chat_tools.jpg'
const ExperienceSection = () => {
  return (
    //backgroundColor: '#e9ecef'
    <div style={{ padding: '20px' }}>
      <Container>
        <h2 style={{ textAlign: 'center' }}>Skills</h2>
        <hr></hr>
        <CardDeck>
          <Card>
            <Card.Img variant='top' src={programmingLang} />
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
          <Card>
            <Card.Img variant='top' src={databasePhoto} />
            <Card.Body>
              <Card.Title>Database</Card.Title>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant='top' src={chatPhoto} />
            <Card.Body>
              <Card.Title>Tools</Card.Title>
              <ul>
                <li>Chatfuel</li>
                <li>Unity</li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  )
}

export default ExperienceSection
