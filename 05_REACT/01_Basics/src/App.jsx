import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './components/01/Sample'
import Sample2 from './components/02/Sample2'
import Sample201 from './components/2.1/Sample201'
import Sample3 from './components/03/Sample3'
import Bottlepage from './components/Ueben/Bottlepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bottlepage />
    </>
  )
}
export default App