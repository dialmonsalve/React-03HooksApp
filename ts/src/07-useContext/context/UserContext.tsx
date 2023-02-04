import { createContext } from "react";

type UserTtypeContext = {

	user?:{}
}

export const UserContext =  createContext<UserTtypeContext>({});