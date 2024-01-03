
type TState = {
	name: string;
	capital: string;
}
interface IState {
	name: string;
	capital: string;
}
// Similarity
// using type as an index signature with both interface and type:
type TDict = {
	[key: string]: string 
};
interface IDict {
	[key: string]: string;
}

// using function type
type TFn = (x: number) => string;
interface IFn {
	(x: number): string;
}

// using both for extend
interface IStateWithPop extends TState {
	population: number;
}
type TStateWithPop = IState & { population: number; };

// using both for implements
class StateT implements TState {
	name: string = '';
	capital: string = '';
}
class StateI implements IState {
	name: string = '';
	capital: string = '';
}