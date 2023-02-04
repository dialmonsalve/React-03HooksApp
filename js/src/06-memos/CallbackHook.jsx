import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

	const [counter, setCounter] = useState(10);

	const increment = useCallback(
		(value)=>{
			setCounter(v => v + value);
	},[]
	);


	/* const increment = ()=>{
		setCounter(counter+1)
	} */

	return (
		<>
			<h1>useCollback Hook</h1>

			<hr />

			<h3>{counter}</h3>

			<ShowIncrement increment={increment}/>


		</>
	)
}
