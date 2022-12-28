import React from 'react'
import { useDispatch } from 'react-redux'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { displayContent, hideContent } from '../reducers/notificationReducer'
import { createNew } from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const formHandler = async e => {
    e.preventDefault()

    const {
      target: { anecdote },
    } = e

    const returnedAnecdote = await createNew(anecdote.value)

    dispatch(createAnecdote(returnedAnecdote))
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
