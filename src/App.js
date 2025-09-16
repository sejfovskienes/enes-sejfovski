import logo from './logo.svg';
import './App.css';

import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx"
import Skills from "./components/Skills.tsx"
import Projects from "./components/Projects.tsx"
import Experience from "./components/Experience.tsx"
import Contact from "./components/Contact.tsx"


function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div> 
  ) 
}

export default App;
