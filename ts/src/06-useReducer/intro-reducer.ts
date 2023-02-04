interface ITodo{
	id:number,
	todo:string,
	done: boolean
}

type IAction=
	| {type:string;	payload:ITodo}


export const initialState:ITodo[] = [{
	id:1,
	todo:'Recolectar la piedra del alma',
	done: false
}]

const todoReducer = (state:ITodo[] = initialState, action?:IAction):ITodo[] => {

	if (action?.type === '[TODO] add todo'){
		return [...state,  action.payload]
	}
	return state
}

let todos = todoReducer()

const newTodo:ITodo = {
	id:2,
	todo:'Recolectar la piedra del poder',
	done: false
}

const addTodoAction:IAction = {
	type:'[TODO] add todo',
	payload:newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);


