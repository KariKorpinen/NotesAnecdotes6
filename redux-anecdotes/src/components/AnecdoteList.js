import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'
import { makeNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const byVotes = (b1, b2) => b2.votes - b1.votes

const anecdotesToShow = ({ anecdotes, filter }) => { 
    if (filter === 'ALL') {
      return anecdotes
        .sort(byVotes)
    }
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter)) 
  }

const AnecdoteList = (props) => {

  const voteItem = (anecdote) => {
    props.vote(anecdote)
    const notify = `${anecdote.content.toString()} voted`
    props.makeNotification(notify, 5)
    //anecdotesToShow()
  }
  return(
    <div>

    <ul>
      {props.visibleAnecdotes
        .map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          
          handleClick={() => voteItem(anecdote)}
        />
        )
      }
    </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state),
    filter: state.filter,
    notification: state.notification 
  }
}

const mapDispatchToProps = {
  vote,
  makeNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)