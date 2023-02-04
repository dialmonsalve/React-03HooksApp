import { useState } from "react"

export const useCounter = (initialValue = 1) => {

	const [counter, setCounter] = useState<number>(initialValue)

	const increment = (value:number=1)=>{

		if (counter >= 2723) return
		setCounter(counter+value)
	}

	const decrement = (value:number=1)=>{

		if (counter <= 1) return

		setCounter(counter-value)
	}

	const reset = ()=>{
		setCounter(initialValue)
	}


	return {
		counter,
		increment,
		decrement,
		reset,
	}
}
