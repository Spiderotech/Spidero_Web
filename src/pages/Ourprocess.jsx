import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCommunicationStructure from '../components/Ourprocess/ProjectCommunicationStructure'
import Collaborationtools from '../components/Ourprocess/Collaborationtools'
import How_wework from '../components/Ourprocess/How_wework'
import Navbarnormal from '../components/Navbarnormal'

const Ourprocess = () => {
  return (
    <>
    <Navbarnormal/>
    <How_wework/>
    <ProjectCommunicationStructure/>
    <Collaborationtools/>
    <Footer/>
    </>
  )
}

export default Ourprocess