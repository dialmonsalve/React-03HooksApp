
import { UserContext } from "./UserContext"

type props = {
	children:JSX.Element|JSX.Element[]
}

const user = {
	id:1223,
	email:'emali@email.com',
	name:'dieguin'
}

export const UserProvider = ({ children }:props) => {
	return (
		
		<UserContext.Provider value={{ user }}>
			{ children }
		</UserContext.Provider>
	)
}
