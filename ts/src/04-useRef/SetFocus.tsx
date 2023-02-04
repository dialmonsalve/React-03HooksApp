import { useRef } from "react"

export const SetFocus = () => {

	const inputRef = useRef<HTMLInputElement>(null)

	const onCLick = () => {
		inputRef.current&& inputRef.current.select()		
	}
	return (

		<div>
			<input 
				className="m-3"
				ref={inputRef}			
			/>
				<input 
				className="m-3"
				/>
			<button 
				className="btn btn-primary"
				onClick={onCLick}
			> Foco</button>
		</div>
	)
}
