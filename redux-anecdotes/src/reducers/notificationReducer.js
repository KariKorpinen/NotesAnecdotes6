export const makeNotification = (notification, time) => {
    return async dispatch =>{
        dispatch({
          type: 'NEW_NOFIFY',
          data: notification
        })
        setTimeout(
          () => dispatch({ type: 'EMPTY', content: ''}),
        time * 1000)
    }
}

const emptyNotify = () => {
    return {
        type: 'EMPTY'
    }
}

const notificationReducer = (state = '', action) => {
  console.log('notificationReducer NEW', action.data)
  switch(action.type) {
    case 'NEW_NOFIFY':
      return action.data
    case 'EMPTY':
      return ''
    default:
      return state
  }
}

export default notificationReducer