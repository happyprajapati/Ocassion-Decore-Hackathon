import React from 'react'
import Welcome from '../components/home/Welcome'
import Events from '../components/home/Events'
import Header from '../components/header'
import Footer from '../components/footer'

function home() {
  return (
    <>
    <Header />
      <Welcome />
      <Events />
      <Footer />
    </>
  )
}

export default home
