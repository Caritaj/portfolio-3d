import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar, Tech, Works } from "./components";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App
