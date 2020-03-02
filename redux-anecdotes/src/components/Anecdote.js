import React from 'react'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <li onClick={handleClick}>
       {anecdote.content} <strong>{anecdote.votes}</strong> Vote
    </li>
  )
}

export default Anecdote