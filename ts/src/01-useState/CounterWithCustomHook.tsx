import { useCounter } from '../hooks/useConter'

export const CounterWithCustomHook = () => {

	const { counter, increment, decrement, reset } = useCounter()

	return (
		<>
			<h1>Counter : { counter }</h1>
			<hr />
			<button
				className='btn btn-outline-danger'
				onClick={() => increment(2) }
			>+1
			</button>
			<button
				className='btn btn-outline-dark'
				onClick={() => decrement(3) }
			>-1
			</button>
			<button
				className='btn btn-outline-primary'
				onClick={reset}
			>Reset
			</button>
		</>


	)
}
