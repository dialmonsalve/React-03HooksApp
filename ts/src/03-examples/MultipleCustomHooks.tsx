import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./"

export const MultipleCustomHooks = () => {

	const {counter, increment, decrement, reset} = useCounter()
	const url = `https://xkcd.vercel.app/?comic=${counter}`
	const {datum, isLoading, hasError} =  useFetch(url)	
	const {safe_title, year, num} = datum

	return (
		<>
			<h1>Comic quote</h1>
			<hr />

			{
				(isLoading)
					? <LoadingQuote />
					: <Quote safe_title={ safe_title } year={ year } />	
			}

			<button 
				className="btn btn-outline-dark mx-2" 
				onClick={()=>decrement()}	
			>
				Previous quote
			</button>

			<button 
				className="btn btn-outline-danger" 
				onClick={()=>reset()}	
			>
				Reset
			</button>

			<button 
				className="btn btn-outline-primary mx-2" 
				onClick={()=>increment()}	
			>
				Next quote
			</button>
			
			<div>
				{num}
			</div>
		</>
	)
}
