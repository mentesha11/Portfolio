import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project"
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className=" text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>

      <div className="container mx-auto px-8">
      <Navbar />
      <Introduction />
      <About />
      <Technologies />
      <Experience />
      <Project />
      <Contact />
      
      </div>
       </div>
  )
  
}

export default App; 