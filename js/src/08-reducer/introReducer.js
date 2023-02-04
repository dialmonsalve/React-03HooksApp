const initialState = [{
	id:1,
	todo: 'Recolectar la piedra del alma',
	done:false,
}];

const todoReducer =(state = initialState, action = {}) =>{

	if(action.type ==='[TODO] add todo'){

		return [...state, action.payload]

	};
};

let todos = todoReducer();

const newTodo ={
	id:2,
	todo: 'Recolectar la piedra del poder',
	done:false,
}

const addAction = {
	type: '[TODO] add todo',
	payload: newTodo,
};

todos = todoReducer(todos, addAction)

console.log({state:todos})