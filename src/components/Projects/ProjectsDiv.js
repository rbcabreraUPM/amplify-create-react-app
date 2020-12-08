import React from 'react'
import { Col, Row, Grid } from 'react-flexbox-grid'
import DeviceIcons from './DeviceIcons'
import ProjectCards from './ProjectCards'
const ProjectsDiv = ({ projects }) => {
  const group = (items, n) =>
    items.reduce((acc, x, i) => {
      const idx = Math.floor(i / n)
      acc[idx] = [...(acc[idx] || []), x]
      return acc
    }, [])

  return (
    <div>
      {group(projects, 3).map((children) => (
        <ul className='cards__items_custom'>
          {children.map((x, i) => (
            <div className='card_custom card-project_custom'>
              <Row>
                <Col>
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
