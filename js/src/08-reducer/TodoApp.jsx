import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks';

export const TodoApp = () => {

	const {todos, todosCount, pendingsTodoCount, handleRemoveTodo, handleToggleTodo, handleNewTodo} = useTodo()

	return (
		<>
			<h1>TODOApp: {todosCount}, <small>Pendientes: {pendingsTodoCount} </small></h1>
			<hr />

			<div className="row">

				<div className="col-7">
					<TodoList
						todos={todos}
						onDeleteTodo = {handleRemoveTodo}
						onToggleTodo={handleToggleTodo}/>
				</div>

				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />

					<TodoAdd
						onNewTodo={handleNewTodo}/>

				</div>
			</div>

		</>
	)
}
