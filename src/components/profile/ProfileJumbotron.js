import React from 'react'
import { Jumbotron, Row, Container, Col, Image } from 'react-bootstrap'

import '../../styles/components/profile-jumbotron.css'
import profilePhoto from '../../static/img/profile.jpg'
import Navigationbar from '../Navigationbar'

import Background from '../../static/img/cover.png'
const ProfileJumbotron = () => {
  return (
    <section
      style={
        {
          // backgroundImage: `url(${Background})`,
          // backgroundSize: 'cover',
          // color: 'white',
        }
      }
    >
      {/* <Navigationbar></Navigationbar> */}
      <Container>
        <Row style={{ paddingTop: '20px' }}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Image
              id='profle-photo'
              className='center-image shadow'
              src={profilePhoto}
              fluid
              roundedCircle
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div style={{ paddingBottom: '50px' }}>
              {/* <h5 style={{ marginTop: '20px' }}>Hello, my name is</h5> */}
              <h2
                style={{ textAlign: 'center', paddingTop: '10px' }}
                id='profile-complete-name'
                className='profile-title'
              >
                REUBEN JOSEPH B. CABRERA
              </h2>
              <h3
                className='profile-title'
                style={{ textAlign: 'center', fontWeight: 'lighter' }}
              >
                SOFTWARE ENGINEER | LECTURER
              </h3>
              {/* <span>
                I am an <b>Software Engineer</b> specializing in backend
                development for scalable web services. As for backend
                development, I use <b>JavaScript</b> as my main programming
                language. I also do a little frontend work as well. Even though
                I still use basic Javascript and CSS, I am also starting to
                learn how to build web apps using React (for example, like this
                portfolio).
              </span>
              <br></br>
              <br></br>

              <span>
                I also teach at the University of the Philippines Manila where I
                handle <b>Database Systems</b> and{' '}
                <b> Interactive Computer Graphics</b>.
              </span> */}
            </div>
            {/* <p>
              <Button variant='primary'>Learn more</Button>
            </p> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProfileJumbotron
