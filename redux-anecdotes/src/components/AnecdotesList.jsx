import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdotesList = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = id => {
    dispatch(addVote(id))
  }

  let sortedAnecdotes = [...anecdotes]

  const sortArray = (a, b) => {
    if (a.votes > b.votes) {
      return -1
    }
    if (a.votes < b.votes) {
      return 1
    } else {
      return 0
    }
  }
  sortedAnecdotes.sort(sortArray)

  return (
    <>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdotesList
