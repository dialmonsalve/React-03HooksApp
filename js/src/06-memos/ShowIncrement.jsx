import React from 'react';

export const ShowIncrement = React.memo( ({increment}) => {

	console.log('disparando');

	return (

		<button 
		className='btn btn-dark'
		onClick={() => {
			increment(8);
		}}
		>
			Press me
		</button>
	)
})
