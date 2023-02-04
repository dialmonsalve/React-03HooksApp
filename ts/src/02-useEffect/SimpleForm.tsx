import { useEffect, useState } from "react"

type Form ={
	username:string,
	email:string
}

const form:Form = {
	username: "diego",
	email: "correo@correo.com"
}

export const SimpleForm = () => {

	const [formState, setFormState] = useState<Form>(form)

	const handleChange = ({target}:React.ChangeEvent<HTMLInputElement>)=>{
		const {name, value} = target;
		setFormState({
			...formState,
			[name] : value
		})
	}

	useEffect(() => {
		console.log("first")
	
	}, [])
	

	return (
		<>
			<h1>Simple Form</h1>
			<hr />

				<input
				className="form-control mt-2"
					type="text"
					name="username"
					id="username"
					placeholder="username"
					onChange={handleChange}
				/>
				<input
				className="form-control mt-2"
					type="email"
					name="email"
					id="email"
					placeholder="email@email.com"
					onChange={handleChange}
				/>	

		</>

	)
}
