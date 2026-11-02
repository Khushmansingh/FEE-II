import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import Nav from './Nav'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1>App Component</h1>
      <h2>{count}</h2>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <Nav />
    </>
  )
}

export default App
