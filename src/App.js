import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import axios from 'axios'
import './App.css';


const App = () => {
  //Characters state
  const [chars, setChars] = useState([])

  //Loading State
  const [isLoading, setIsLoading] = useState(true)

  //Query in the search field
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchChars = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setChars(result.data)
      setIsLoading(false)
    }

    fetchChars()
  }, [query])

  return <div className="container">
    <Header />
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid isLoading={isLoading} chars={chars} />
  </div>
}

export default App;
