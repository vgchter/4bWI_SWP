import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/01/card'
import Sample from './components/01/Sample'
import Sample2 from './components/02/Sample2'
import BearCounter from "./components/bears/BearCounter";
import BearIncreaser from "./components/bears/BearIncreaser";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hallo Du</h1>
      <Button description="fjdaskl" title="jfdks" />

      <BearCounter />
      <BearCounter />
      <BearCounter />
      <BearIncreaser />
    </>
  )
}
export default App