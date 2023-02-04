export interface ITodo{
	id:number,
	description:string,
	done:boolean
}

export type ActionType=
	| {type:"[TODO Add todo]";	payload:ITodo}
	| {type:"[TODO Remove todo]";	payload:number}
	| {type:"[TODO Toggle todo]";	payload:number}