
import { connect } from "react-redux"
import ConnectedAddTodo from "./AddTodo"
import { fetchTodos } from "../redux/todos/todoSlice"

// eslint-disable-next-line react/prop-types
function TodoApp({todos, fetchTodos}) {
  console.log(todos)
  return (
    <>
        <h3>Todos</h3>
        <hr />
        <button onClick={fetchTodos}>Fetch Todos</button>
        <ConnectedAddTodo />
        {
          // eslint-disable-next-line react/prop-types
          todos.todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.title}  -- </span>
              <span>{todo.completed.toString()}</span>
            </div>
          ))
        }
    </>

  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {fetchTodos}

const ConnectedTodoApp = connect(mapStateToProps, mapDispatchToProps )(TodoApp)
export default ConnectedTodoApp