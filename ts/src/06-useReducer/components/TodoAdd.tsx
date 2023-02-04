import { useForm } from "../../hooks"
import { ITodo } from "../interfaces/ITodoReducer";

type props ={
	onNewTodo( todo:ITodo ):void;

}

const form = {
	inputDescription: "",
}

export const TodoAdd = ({ onNewTodo }:props) => {

	const { handleChange, formState:{ inputDescription}, handleResetForm } = useForm( form )
	const onSubmit = ( e:React.FormEvent<HTMLFormElement | HTMLButtonElement> ) =>{

		e.preventDefault();

		if(inputDescription){
			
			if(inputDescription.length <=1 || inputDescription==='') return

			onNewTodo&& onNewTodo({
				id: new Date().getTime() * 3,
				description: inputDescription,
				done: false
			});
		}

		handleResetForm();
}

	return (
		<form onSubmit={ onSubmit }  >
			<input 
				className="form-control"
				placeholder="¿Qué hay para hacer?"
				type="text"
				name="inputDescription"
				value={inputDescription}
				onChange={ handleChange }				
			/>
			<button
				type="submit"
				className="btn btn-outline-success mt-1"
				onSubmit={ onSubmit }
			>
				Agregar
			</button>
		</form>
	)
}
