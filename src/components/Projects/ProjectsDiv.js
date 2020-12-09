import React from 'react'
import { Col, Row, Grid } from 'react-flexbox-grid'
import DeviceIcons from './DeviceIcons'
import ProjectCards from './ProjectCards'

import profilePhoto from '../../static/img/profile.jpg'
const ProjectsDiv = ({ projects }) => {
  const group = (items, n) =>
    items.reduce((acc, x, i) => {
      const idx = Math.floor(i / n)
      acc[idx] = [...(acc[idx] || []), x]
      return acc
    }, [])

  return (
    <div>
      {group(projects, 2).map((children) => (
        <ul className='cards__items_custom'>
          {children.map((x, i) => (
            <div className='card_custom card-project_custom'>
              <Row>
                <Col xs={3} sm={3} md={3} lg={3}>
                  <div>
                    {' '}
                    <img
                      src={`/images/projects/${x.image}`}
                      alt='/'
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                    ></img>
                  </div>
                </Col>
                <Col xs={9} sm={9} md={9} lg={9}>
                  <div>
                    <h2>
                      {x.name} <DeviceIcons devices={x.devices}></DeviceIcons>
                    </h2>
                    <span style={{ fontSize: '12px', color: 'gray' }}>
                      {x.year}
                    </span>
                    <br></br>
                    <span>{x.description}</span>
                    <Grid fluid>
                      <Row>
                        <ProjectCards
                          technologies={x.technologies}
                        ></ProjectCards>
                      </Row>
                    </Grid>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default ProjectsDiv
