import { useEffect, useState } from "react"

type Data={
	datum: Datum,
	isLoading: boolean,
	hasError: null,
}

type Datum={
	safe_title:string,
	year:string,
	num:string
}

const data: Data ={
	datum:{
		safe_title:"",
		year:"",
		num:""
	} ,
	isLoading: true,
	hasError: null,
}

export const useFetch = ( url:string ) => {

	const [fetchApi, setFetchApi] = useState<Data>( data );

	const getData = async() => {

		try {

			setFetchApi( {
				...fetchApi,
				isLoading:true} )

			const resp = await fetch( url );
			const datum:Datum = await resp.json()

			setFetchApi( {

				...fetchApi,
				datum,
				isLoading:false,

			} )

		} catch ( error ) {
			console.log(error)
		}
	}

	useEffect(() => {
		getData()	
	}, [url])

	return {
		datum: fetchApi.datum,
		isLoading: fetchApi.isLoading,
		hasError: fetchApi.hasError,
	}
}
