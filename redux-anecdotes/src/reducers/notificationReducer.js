import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Notification working Sir!',
  reducers: {
    display(state, action) {
      return state
    },
  },
})

export const { display } = notificationSlice.actions

export default notificationSlice.reducer
