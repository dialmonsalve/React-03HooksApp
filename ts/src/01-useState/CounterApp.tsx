import { useState } from "react"

type Counter={
	counter1:number,
	counter2:number,
	counter3:number,
}

const stateCounter:Counter ={
	counter1: 10,
	counter2: 20,
	counter3: 30
}

export const CounterApp = () => {

	const [{counter1, counter2, counter3}, setCounter] = useState<Counter>(stateCounter)

	const handleCounter = ()=>{

		const number:Counter = {
			counter1:counter1+1,
			counter2:counter2+2,
			counter3: counter3+3
		}

		setCounter(number)
	}


	return (
		<>
			<h1>counter1sdf: {counter1}</h1>
			<h1>counter2: {counter2}</h1>
			<h1>counter3: {counter3}</h1>
			<hr />
			<button 
				className="btn btn-danger"
				onClick={ handleCounter	}
				>+1

			</button>
		</>
	)
}
