import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationNumber=100)=>{

	for (let i = 0; i < iterationNumber; i++) {


		console.log('Ahí vamos');
		
	}

	return `${iterationNumber} iteraciones realizadas`


}

export const Memohook = () => {

	const {counter, increment} = useCounter(500)

	const [loading, setloading] = useState(true);

	const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

	return (
		<>
			<h1>Counter: <small>{counter}</small></h1>

			<hr />

			<h4>{memorizeValue}</h4>

			<button
				className="btn btn-outline-dark"
				onClick={ ()=> increment()}
			>				
				+1
			</button>


			<button 
				className="btn btn-outline-info"
				onClick={ () =>setloading(!loading)}
			>SHOW/HIDE {JSON.stringify(loading)}</button>

		</>
	)
}
