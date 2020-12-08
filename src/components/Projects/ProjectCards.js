import React from 'react'
import '../../static/css/Cards.css'

import { Col } from 'react-flexbox-grid'
const ProjectCards = ({ technologies }) => {
  const technologiesList = technologies.map((tech) => (
    <Col style={{ marginRight: '5px', marginLeft: '5px' }}>
      <div
        style={{ textAlign: 'center', width: '100%' }}
        className='card_custom card-project_custom'
      >
        {tech}
      </div>
    </Col>
  ))
  return technologiesList
}
export default ProjectCards
