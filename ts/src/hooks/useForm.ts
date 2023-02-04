import { useEffect, useState } from "react";

type Form ={
	[name:string]:string
}

export const useForm = (initialForm:Form) => {

	const [formState, setFormState] = useState<Form>(initialForm)

	const handleChange = ({target}:React.ChangeEvent<HTMLInputElement>)=>{
		const {name, value} = target;
		setFormState({
			...formState,
			[name] : value
		})
	}

	const handleResetForm = ()=>{

		setFormState(initialForm)
	}

	useEffect( () =>{
		setFormState(initialForm)

	}, [initialForm])

	return {
		formState,
		...formState,
		
		handleChange,
		handleResetForm
	}
}
