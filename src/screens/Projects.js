import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProjects } from '../actions/projectActions'

import Footer from '../components/Footer'
import ProjectCards from '../components/Projects/ProjectCards'
import '../static/css/Cards.css'
import { Grid, Row } from 'react-flexbox-grid'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
const Projects = () => {
  const dispatch = useDispatch()

  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects } = projectList

  useEffect(() => {
    dispatch(listProjects())
  }, [dispatch])

  return (
    <div>
      {loading ? (
        <div className='center'>
          <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
        </div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className='cards_custom'>
          <div className='cards__container_custom'>
            <div className='cards__wrapper_custom'>
              <ul className='cards__items_custom'>
                {projects.map((project) => (
                  <div className='card_custom card-project_custom'>
                    <div>
                      <h2>{project.name}</h2>
                      <span>{project.description}</span>
                      <Grid fluid>
                        <Row>
                          <ProjectCards
                            technologies={project.technologies}
                          ></ProjectCards>
                        </Row>
                      </Grid>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Footer stickyStyle={true}></Footer>
    </div>
  )
}

export default Projects
