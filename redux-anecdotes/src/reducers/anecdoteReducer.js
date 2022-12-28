import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../services/anecdotes'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const anecdoteToUpdate = state.find(
        anecdote => anecdote.id === action.payload
      )
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1,
      }
      return state.map(anecdote =>
        anecdote.id === action.payload ? updatedAnecdote : anecdote
      )
    },
    createAnecdote(state, action) {
      return state.concat(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { addVote, createAnecdote, setAnecdotes } = anecdotesSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await getAll()
    dispatch(setAnecdotes(notes))
  }
}

export default anecdotesSlice.reducer
