import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
// import Team from "./components/Team";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
      <TopBar />
      <Navbar />
      <Slider />
      <About />
      {/* <Team /> */}
  </div>
  )
}

export default App
