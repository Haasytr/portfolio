import React from 'react'

import { globalStyles } from './styles/global'
import { Header } from './components/header'
import { Projects } from './pages/home/components/projects'
import { Footer } from './components/footer'
import { Home } from './pages/home'

globalStyles()

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
