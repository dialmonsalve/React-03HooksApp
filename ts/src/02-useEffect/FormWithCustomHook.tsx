import { useForm } from "../hooks/useForm"

type Form ={
	username:string,
	email:string,
	password:string
}

const form:Form = {
	username: "",
	email: "", 
	password:""
}


export const FormWithCustomHook = () => {

	const { formState, handleChange, username, email, password, handleResetForm } = useForm(form)
	

	return (
		<>
			<h1>Simple Form</h1>
			<hr />

				<input
				className="form-control mt-2"
					type="text"
					name="username"
					value={username}
					placeholder="username"
					onChange={handleChange}
				/>
				<input
				className="form-control mt-2"
					type="email"
					name="email"
					value={email}
					placeholder="email@email.com"
					onChange={handleChange}
				/>	
				<input
				className="form-control mt-2"
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>	
				<button
					className="btn btn-outline-dark mt-4"
					onClick={handleResetForm}
				>
					Borrar
				</button>

		</>

	)
}