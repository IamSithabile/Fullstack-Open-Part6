import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'

const App = () => {
  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdotesList />
      <AnecdoteForm />
    </>
  )
}

export default App
