import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    displayContent(state, action) {
      return `You created the anecdote: '${action.payload}'`
    },
    displayVote(state, action) {
      return `You voted for '${action.payload}'`
    },
    hideContent(state, action) {
      return null
    },
  },
})

export const { displayContent, hideContent, displayVote } =
  notificationSlice.actions

export default notificationSlice.reducer
