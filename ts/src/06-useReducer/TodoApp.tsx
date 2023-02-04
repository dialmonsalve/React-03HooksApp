
import { useTodos } from "../hooks/useTodos"
import { TodoAdd,TodoList  } from "./components"

export const TodoApp = () => {

	const { 
		todos, 
		todosCount, 
		todosPendig, 
		handleNewTodo, 
		handleToggleTodo, 
		handleDeleteTodo 
	} = useTodos()

	return (
		<>
			<h1>TodoApp {todosCount}, <small> Pendings: {todosPendig}</small></h1>
			<hr />

			<div className="row">
				<div className="col-7">

					<TodoList 
						todos={ todos }
						onDeleteTodo ={ handleDeleteTodo }
						onToggleTodo ={ handleToggleTodo }
					/>

				</div>
				<div className="col-5">
					<h4>Add TODO</h4>
					<hr />
					<TodoAdd onNewTodo={ handleNewTodo }/>
				</div>
			</div>
			
		</>
	)
}
