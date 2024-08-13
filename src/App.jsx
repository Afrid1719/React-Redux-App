import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply } from './redux/counter/counterSlice'
import './App.css'
import PasswordInupt from './components/PasswordInupt'
import ConnectedTodoApp from './components/TodoApp'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        Currently count is {count}
      </div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>Dbl</button>
      <div>
        <PasswordInupt />
      </div>
      <ConnectedTodoApp name="John" />
    </>
    
  )
}

export default App
