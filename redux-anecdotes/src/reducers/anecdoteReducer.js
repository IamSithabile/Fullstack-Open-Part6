import { createSlice } from '@reduxjs/toolkit'
import { createNew, getAll } from '../services/anecdotes'

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
    appendAnecdotes(state, action) {
      console.log(action.payload)
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { addVote, appendAnecdotes, setAnecdotes } = anecdotesSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    console.log(anecdote)
    const createdAnecdote = await createNew(anecdote)
    console.log(createAnecdote)
    dispatch(appendAnecdotes(createdAnecdote))
  }
}

export default anecdotesSlice.reducer
