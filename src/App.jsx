import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Skill from "./components/Skills/Skill"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Work from "./components/Work/Work"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experince"
import BlurBlob from './BlurBlob'

function App() {


  return (
    <>
      <div className='bg-[#060510]'>

        <BlurBlob position={{top: "35%", left:"20%"}} size={{height: "40%", width: "30%"}} />
        <div className='absolute inset-0 bg-slate-950 bg-[linear-gradient(to_right,#3b82f62e_1px,transparent_1px),linear-gradient(to_bottom,#3b82f62e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        <div className='relative pt-20'>
          <Navbar />
          <About />
          <Skill />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
