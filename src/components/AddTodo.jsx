import  { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/todos/todoSlice';

// eslint-disable-next-line react/prop-types
function AddTodo({addTodo}) {
    const [value, setValue] = useState("")

    const handleAddTodo = () => {
        addTodo({desc: value})
    }
  return (
    <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

const mapDispatchToProps = {addTodo}

const ConnectedAddTodo = connect(null, mapDispatchToProps )(AddTodo)

export default ConnectedAddTodo