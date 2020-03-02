import React from 'react'
import { connect } from 'react-redux' 
import { createAnecdote } from '../reducers/anecdoteReducer'
import { makeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
    
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.makeNotification(`${content} added`, 5)
  }

  return (
    <div>
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add new anecdote</button>
    </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('mapstatetoprops', state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  createAnecdote,
  makeNotification
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

