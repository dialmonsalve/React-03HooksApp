import { useEffect, useReducer } from "react";
import { ActionType, ITodo } from "../06-useReducer/interfaces/ITodoReducer";
import { todoReducer } from "../06-useReducer/todoReducer";

const initialState:ITodo[] = []

const init = () =>{

	const value = localStorage.getItem('todos')

	if (typeof value === 'string') {
		return JSON.parse(value)
	}else{
		return []
	}
}

export const useTodos = () => {

	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))	
	}, [todos])
	

	const handleNewTodo = ( todo:ITodo ) =>{
		const action:ActionType= {
			type: "[TODO Add todo]",
			payload: todo
		};
		dispatch(action)
	}

	const handleToggleTodo= (id:number)=>{
		dispatch({
			type:'[TODO Toggle todo]',
			payload:id
		})
	}

	const handleDeleteTodo = (id:number)=>{
		console.log(id)
		dispatch({
			type:'[TODO Remove todo]',
			payload:id
		})
	}
	return {
		todos,

		todosCount:todos.length,
		todosPendig: todos.filter(({ done })=>!done).length,

		handleDeleteTodo,	
		handleNewTodo, 
		handleToggleTodo, 

	}
}
