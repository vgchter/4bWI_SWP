import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/01/card'
import Sample from './components/01/Sample'
import Sample2 from './components/02/Sample2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sample2 />
    </>
  )
}
export default App