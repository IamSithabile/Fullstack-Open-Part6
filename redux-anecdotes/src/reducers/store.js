import { configureStore } from '@reduxjs/toolkit'

import anecdotesReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'

const store = configureStore({
  reducer: { anecdotes: anecdotesReducer, notification: notificationReducer },
})
export default store
