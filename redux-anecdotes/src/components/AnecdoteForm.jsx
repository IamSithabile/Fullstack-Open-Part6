import React from 'react'
import { useDispatch } from 'react-redux'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { displayContent, hideContent } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const formHandler = e => {
    e.preventDefault()

    const {
      target: { anecdote },
    } = e

    dispatch(createAnecdote(anecdote.value))
    dispatch(displayContent(anecdote.value))
    setTimeout(() => {
      dispatch(hideContent())
    }, 5000)
    anecdote.value = ''
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={formHandler}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
