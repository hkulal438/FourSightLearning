import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import WhyChoose from "./components/WhyChooseUs/WhyChoose";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
      <TopBar />
      <Navbar />
      <Slider />
      <About />
      <Team />
      <WhyChoose />
      <Footer />
  </div>
  )
}

export default App
