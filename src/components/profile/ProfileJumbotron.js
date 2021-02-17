import React from 'react'
import { Jumbotron, Row, Container, Col, Image } from 'react-bootstrap'

import '../../styles/components/profile-jumbotron.css'
import profilePhoto from '../../static/img/profile.jpg'

const ProfileJumbotron = () => {
  return (
    <Jumbotron id='profile-jumbotron'>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Image
              id='profle-photo'
              className='center-image shadow'
              src={profilePhoto}
              fluid
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={9}>
            <h5 style={{ marginTop: '20px' }}>Hello, my name is</h5>
            <h2 id='profile-complete-name'>REUBEN JOSEPH B. CABRERA</h2>
            <span>
              I am an <b>Software Engineer</b> specializing in backend
              development for scalable web services. As for backend development,
              I use <b>JavaScript</b> as my main programming language. I also do
              a little frontend work as well. Even though I still use basic
              Javascript and CSS, I am also starting to learn how to build web
              apps using React (for example, like this portfolio).
            </span>
            <br></br>
            <br></br>

            <span>
              I also teach at the University of the Philippines Manila where I
              handle <b>Database Systems</b> and{' '}
              <b> Interactive Computer Graphics</b>.
            </span>
            {/* <p>
              <Button variant='primary'>Learn more</Button>
            </p> */}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default ProfileJumbotron
