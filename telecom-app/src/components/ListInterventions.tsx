import React from 'react'
import Navbar from './Navbar'
import InterventionComponent from './InterventionComponent'
import Interventions from './Interventions'
import Footer from './Footer'

function listInterventions() {
  return (
    <div>
      <Navbar/>
      <InterventionComponent/>
      <Interventions/>
      <Footer/>
    </div>
  )
}

export default listInterventions
