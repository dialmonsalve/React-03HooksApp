import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

	const {formState, onInputChange, username, email, password, onResetForm} = useForm({
	
		username: '',
		email: '',
		password:"",	
	
	})

	//const {	username,email,	password} = formState;
	

	return (
		<>
			<h1>Form With Custom Hook</h1>


			<hr />

			<input 
				type="text"
				className="form-control mb-4"
				placeholder="Username"
				name="username"
				value={ username }
				onChange={onInputChange}
			/>

			<input 
				type="email"
				className="form-control mb-4"
				placeholder="correo@correo.com"
				name="email"
				value={ email }
				onChange={onInputChange}
			/>
				
			{
				(username=== 'dial2') && <Message/>
			}

			<input 
				type="password"
				className="form-control mb-4"
				placeholder="Tu password"
				name="password"
				value={ password }
				onChange={onInputChange}
			/>

			<button 
				className="btn btn-outline-danger"
				onClick={ onResetForm }
			>Borrar</button>
		</>
	)
}
