import { useDispatch, useSelector } from 'react-redux'
import { double,zero } from './redux/counterSlice'

function Nav() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Nav Component</h1>
      <h2>{count}</h2>
      <button type="button" onClick={() => dispatch(double())}>
        Double
      </button>
      <button type="button" onClick={() => dispatch(zero())}>
        Zero
      </button>
    </>
  )
}

export default Nav