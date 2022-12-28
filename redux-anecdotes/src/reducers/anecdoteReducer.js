import { createSlice } from '@reduxjs/toolkit'

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
      const newAnecdote = {
        content: action.payload,
        votes: 0,
      }
      return state.concat(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { addVote, createAnecdote, setAnecdotes } = anecdotesSlice.actions

export default anecdotesSlice.reducer
