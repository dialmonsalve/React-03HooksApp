import { ITodo } from "../interfaces/ITodoReducer";

type props = {
	todo:ITodo
	description:string
	onDeleteTodo(id:number):void;
	onToggleTodo(id:number):void
}

export const TodoItem = ({description, todo:{id, done},  onDeleteTodo,  onToggleTodo}:props) => (
	<li			
		className="list-group-item d-flex justify-content-between"
	>
		<span 
			className={`align-self-center ${ (done) ? 'text-decoration-line-through':''}`} 
			onDoubleClick={ () => onToggleTodo( id ) }
			>{ description }

		</span>
		<button 
			className="btn btn-danger ms-3"
			onClick={()=> onDeleteTodo(id) }
		>
			Borrar
		</button>
	</li>

)