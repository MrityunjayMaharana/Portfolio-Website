import './App.css'
import { SiReact } from "react-icons/si";
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technology from './components/Technology'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Technology />
      <Projects />
      <Contact />
      <center>
        <footer>
          <div className="foot">
            <p>Made with</p> <div className='react'><p className='react-ico'><SiReact /></p></div> <p>by Mrityunjay Maharana &copy; 2024</p>
          </div>
        </footer>
      </center>
      
    </>
  )
}

export default App
