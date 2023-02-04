import { useForm } from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

	const { description, onInputChange, onResetForm} =useForm({

		description:''
	})

	const onSubmitForm = (e)=>{

		e.preventDefault();
		if(description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			done:false,
			description
		}

		onNewTodo(newTodo)
		onResetForm()

	}
	return (
		<form onSubmit={ onSubmitForm }>
			<input 
				type="text"
				placeholder="¿Que hay que hacer?"
				className="form-control"
				name="description"
				value={ description ||"" }
				onChange={onInputChange}
				/>
			<input 
				type="submit"
				value="Agregar"
				className="btn btn-outline-danger mt-3"
				/>
		</form>
	)
}
