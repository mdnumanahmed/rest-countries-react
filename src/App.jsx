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
      <h1 className='text-center text-4xl font-bold my-6'>Welcome to Bongo Travelers Group</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10'>
        <Countries countries={countries}></Countries>
      </div>
    </div>
  )
}

export default App
