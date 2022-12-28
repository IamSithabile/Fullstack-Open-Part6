import { configureStore } from '@reduxjs/toolkit'
import anecdotesSlice from './anecdoteReducer'

const store = configureStore({ reducer: { anecdotes: anecdotesSlice } })
export default store
