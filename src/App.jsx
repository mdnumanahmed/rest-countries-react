import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    const loadCountries = async() => {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()
      setCountries(data);
    }
    loadCountries()
  },[])

  return (
    <div className="App">
      <h1>Welcome to Bongo Travelers Group</h1>
      <Countries countries={countries}></Countries>
    </div>
  )
}

export default App
