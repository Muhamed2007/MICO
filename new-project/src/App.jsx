import { useState } from 'react'
import './App.css'
import { StyledComp } from './components/styled-comp/styled-comp'
import { A3 } from './components/use-context/A3'
import { E3 } from './components/use-context/E3'




function App() {
      const [count, setCount] = useState(0)

      return (
<div>
      <A3/>
      <E3/>
</div>
      )
}

export default App
