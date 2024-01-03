
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

// Differnces
// Only Union Type
type AorB = 'A' | 'B';
const a: AorB = 'A';
// Using tuple with type
type PairNum = [number, number];
// Declaration merging with Interface
interface IUSState {
	name: string;
	capital: string;
}
interface IUSState {
	population: number;
}
const wyoming: IUSState = {
	name: 'Wyoming',
	capital: 'Cheyenne',
	population: 500_000
};