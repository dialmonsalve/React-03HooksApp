import { ITodo } from "../interfaces/ITodoReducer"
import { TodoItem } from "./TodoItem"

type props = {
	todos:ITodo[];
	onDeleteTodo(id:number):void;
	onToggleTodo(id:number):void
}
export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }:props) => {
	return (
		<ul className="list-group">
		{
			todos?.map(( todo ) =>(
				<TodoItem 
					key={todo.id}
					description={todo.description}
					todo={todo}
					onDeleteTodo={onDeleteTodo} 
					onToggleTodo={ onToggleTodo }  
					/>
			))
		}		
	</ul>
	)
}
