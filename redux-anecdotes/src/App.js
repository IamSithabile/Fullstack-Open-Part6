import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'

const App = () => {
  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdotesList />
      <AnecdoteForm />
    </>
  )
}

export default App
