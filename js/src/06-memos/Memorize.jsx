import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {

	const {counter, increment} = useCounter(10)

	const [loading, setloading] = useState(true);

	return (
		<>
			<h1>Counter: <Small value={counter}/></h1>

			<hr />

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
