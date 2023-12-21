import React from 'react'

import { globalStyles } from './styles/global'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { Footer } from './components/footer'

globalStyles()

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Footer />
    </>
  )
}

export default App
