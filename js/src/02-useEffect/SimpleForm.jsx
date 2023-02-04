import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

	const [formState, setFormState] = useState({

		username: 'dial',
		email: 'diales@gmail.com'

	});

	const { username, email } = formState

	const onInputChange = ({target:{name, value}}) => {

		setFormState({
			...formState,
			[name]:value
		})
	}

	return (
		<>
			<h1>Simple Form</h1>


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
				className="form-control"
				placeholder="correo@correo.com"
				name="email"
				value={ email }
				onChange={onInputChange}
			/>
				
			{
				(username=== 'dial2') && <Message/>
			}
				

		</>
	)
}
