import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  console.log("App props ", props)
  useEffect(() => {
    props.initializeAnecdotes()
  }, [])
  
  return (
        <div>
        <h2>Anecdotes</h2>
        <Notification />
        <AnecdoteForm />
        <Filter />
        <AnecdoteList />
        </div>
    )
}

export default connect(null, { initializeAnecdotes })(App) 
//export default App