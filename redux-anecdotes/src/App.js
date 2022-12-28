import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </>
  )
}

export default App
