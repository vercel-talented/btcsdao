import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import PlanSection from './components/PlanSection'
import ImageGallery from './components/ImageGallery'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='grid grid-cols-1'>
        <div>
          <Intro />
        </div>
        <div>
          <PlanSection />
        </div>
        <div>
          <ImageGallery />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
