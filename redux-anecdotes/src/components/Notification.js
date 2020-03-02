import React from 'react'
import { connect } from 'react-redux'
import store from './store'
import { makeNotification } from '../reducers/notificationReducer'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log('Notification component: ', props.notification)
  if (props.notification === null) {
     return <div></div>
  } else 
  {
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log('mapstatetoprops', state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  null
)(Notification)
