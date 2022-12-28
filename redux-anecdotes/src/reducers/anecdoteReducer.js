import { createSlice } from '@reduxjs/toolkit'
import { createNew, getAll, vote } from '../services/anecdotes'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateVote(state, action) {
      const updatedAnecdote = action.payload
      console.log(updatedAnecdote)
      return state.map(anecdote =>
        anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
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

export const { updateVote, appendAnecdotes, setAnecdotes } =
  anecdotesSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const addVote = anecdote => {
  return async dispatch => {
    const returnedAnecdote = await vote(anecdote.id, anecdote)

    dispatch(updateVote(returnedAnecdote))
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const createdAnecdote = await createNew(anecdote)
    dispatch(appendAnecdotes(createdAnecdote))
  }
}

export default anecdotesSlice.reducer
