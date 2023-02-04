import { useEffect, useState } from 'react'

export const Message = () => {

	const [coords, setCoords] = useState({x:0, y:0})

	useEffect(() => {
		const onMouvemove= ({x, y}) =>{

			setCoords({x,y});
		}

		window.addEventListener('mousemove', onMouvemove)

		return () => {
			window.removeEventListener('mousemove', onMouvemove)
		}
	}, []);
	
	return (

		
		<>
			<h3>Usuario ya existe</h3>
			{JSON.stringify(coords)}
		</>
		
	)
}
