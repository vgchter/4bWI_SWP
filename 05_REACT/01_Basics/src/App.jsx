import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './components/01/Sample'
import Sample2 from './components/02/Sample2'
import Sample201 from './components/2.1/Sample201'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sample201 />
    </>
  )
}
export default App