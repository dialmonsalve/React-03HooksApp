import { useLayoutEffect, useRef, useState } from "react"

type props={
	safe_title:string,
	year:string
}

type Box={
	width:number,
	height:number

}

const box:Box = {
	width: 0,
	height: 0
}

export const Quote = ({safe_title, year}:props) => {

	const [boxSize, setBoxSize] = useState<Box>(box);

	const lRef = useRef<HTMLInputElement>(null);

	useLayoutEffect(() => {
		
		const {height, width}:any= lRef.current?.getBoundingClientRect();

		setBoxSize({height, width})
	
	}, [year])

	return (

		<>
			<blockquote 
				
				className="blockquote text-end me-5"
				style={{display:'flex'}}
				>
				<p 
					ref={lRef} 
					className="mb-1">{safe_title}</p>
				<footer className="blockquote-footer">{year}</footer>

				
			</blockquote>
			<code>{JSON.stringify(boxSize)}</code> 
			<hr />
		</>
		
	)
}
