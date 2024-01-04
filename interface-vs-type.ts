
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

// Type Union
interface SaveAction {
	type: 'save';
}
interface LoadAction {
	type: 'load';
}
type Action = SaveAction | LoadAction;
// type ActionType = Action['type'] = 'save' | 'load';

// Get Type From Value
const cat1 = {
	height: 1.5,
	color: 'READ'
}
type Cat = typeof cat1;

// get Type from func return value
const getDog = () => { return {weight: 1, color: 'Black'};}
type Dog = ReturnType<typeof getDog>;

// Index Signature
// For truly dynamic data, like a CSV file
// May use with type assertion
type Rocket = {[property: string]: string};
const rocket: Rocket = {
	name: 'Falcon 9',
	variant: 'v1.0',
	thrust: '4,940 kN',
};
const rocketFake: Rocket = {
	name: 'Falcon',
	size: 'XXL',
	brand: 'X'
}

	