//import { memo } from "react";
import React from "react";

//export const Small = memo( ({value}) => {
export const Small = React.memo( ({value}) => {

	console.log('me dibujo');
	return (
		<small>{ value }</small>
	)
})
