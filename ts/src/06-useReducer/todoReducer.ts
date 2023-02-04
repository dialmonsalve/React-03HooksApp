import { ITodo, ActionType } from "./interfaces/ITodoReducer";

const initialState:ITodo = {
	id: 0,
	description: "",
	done: false
}

export const todoReducer = (state: typeof initialState[], action:ActionType):ITodo[] => {

	switch (action.type) {
		case '[TODO Add todo]':
			return [...state, action.payload];

		case('[TODO Remove todo]'):
			return state.filter( todo => todo.id !== action.payload);

		case('[TODO Toggle todo]'):
			return state.map( todo =>{
				if(todo.id === action.payload){
					return{
						...todo,
						done:!todo.done
					}
				}
				return todo
			})


		default:
			return state
	}
}
