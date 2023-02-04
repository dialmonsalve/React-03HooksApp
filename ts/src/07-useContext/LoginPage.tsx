import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

	const {  user } = useContext(UserContext)

	console.log(user);	

	JSON.stringify(user)
	return (

		<>
		<h1>LoginPage</h1>

		<pre>{JSON.stringify(user, null, 3)}</pre>
		</>
	)
}
