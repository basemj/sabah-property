import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Sabah Properties" className='logo' />
      </header>
      <main>
        <h1>As your local agent, we are ready to help</h1>
        <div className='items'>
          <div className='item'>
            <span className="material-symbols-outlined">
              share_location
            </span>
            <h2>Visit</h2>
            <p>Unit 2 424 Edgware Road, London, W2 1EG</p>
          </div>
          <div className='item'>
            <span className="material-symbols-outlined">
              phone_callback
            </span>
            <h2>Call</h2>
            <p>020 8033 8230</p>
          </div>
          <div className='item'>
            <span className="material-symbols-outlined">
              send
            </span>
            <h2>Email</h2>
            <p>sj@sabahproperties.co.uk</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
