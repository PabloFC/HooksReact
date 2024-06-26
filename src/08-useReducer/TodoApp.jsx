import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"


const TodoApp = () => {

  const {todos,handleDeleteTodo,handleNewTodo,handleToggleTodo}=useTodo()

  return (
    <>
      <h1>TodoApp {todos.length} <small>pendientes: {todos.filter(todo=>!todo.done).length  }</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
           <TodoList 
           todos={todos} 
           onDeleteTodo={handleDeleteTodo}
           onToggleTodo={handleToggleTodo}
           />
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>

     
    </>
  )
}

export default TodoApp
