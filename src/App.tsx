import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from "./components/Button";
import {Chip} from "./components/Chip";
import Pizza from '../src/assets/icons/pizza.svg'
import {ProductCard} from "./components/ProductCard";
function App() {
  const [count, setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button fullWidth variant={'secondary'} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
          <Chip active={isActive} onClick={()=>setIsActive(!isActive)} icon={<img src={Pizza}/>}>Test</Chip>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <ProductCard productName={'Хот-дог'} price={"235"} productImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg'} productWeight={555} onAddCLickCallback={()=>{}}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
