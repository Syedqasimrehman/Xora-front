import React from 'react'
import Header from './Section/Header.jsx'
import Hero from './Section/Hero.jsx'
import Features from './Section/Features.jsx'
import Price from './Section/Price.jsx'
import Faq from './Section/Faq.jsx'
import Testimonilas from './components/Testimonilas.jsx'
import Download from './Section/Download.jsx'
import Footer from './Section/Footer.jsx'
const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <Hero/>
      <Features/>
      <Price/>
      <Faq/>
      <Testimonilas />
      <Download />
      <Footer/>
    </main>
  )
}

export default App
