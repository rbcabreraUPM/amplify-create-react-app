import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProjects } from '../actions/projectActions'

import '../static/css/Cards.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Footer from '../components/Footer'

import Loader from 'react-loader-spinner'
import ProjectsDiv from '../components/Projects/ProjectsDiv'

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
        <div className='center'>
          <h1>
            {' '}
            <i className='fas fa-wrench'></i> COMING SOON
          </h1>
        </div>
      ) : (
        <div className='cards_custom'>
          <div className='cards__container_custom'>
            <div className='cards__wrapper_custom'>
              <ProjectsDiv projects={projects}></ProjectsDiv>
            </div>
          </div>
        </div>
      )}

      <Footer stickyStyle={true}></Footer>
    </div>
  )
}

export default Projects
