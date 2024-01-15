import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [joke, setJoke] = useState('')
  const api2= 'https://api.chucknorris.io/jokes/random'
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    getJOke()
  },[]);

 const getJOke = ()=>{
  setIsLoading(true)
  fetch(api2).then(res => res.json()).then(data => {
   setJoke(data.value)
   setIsLoading(false)
  })
}

  return (
    <>
        <p>{joke}</p>
        <button onClick={getJOke}>{isLoading?'Loading':'Get new joke'}</button>
    </>
  )
}

export default App
