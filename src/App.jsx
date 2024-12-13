
import './App.css'
import About from './components/About'
import Finothon from './components/Finothon'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stressometer from './components/Stressometer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Stressometer/>
      <About/>
      <Finothon/>
      <Footer/>
    </>
  )
}

export default App
