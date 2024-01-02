type func = (a: number, b: number) => number;
const add: func = (a, b) => a + b;
const sub: func = (a, b) => a - b;
const mul: func = (a, b) => a * b;
const div: func = (a, b) => a / b;
console.log('ADD', add(1,2));
console.log('SUB', sub(1,2));
console.log('MUL', mul(2,2));
console.log('DIV', div(1,2));

const checkedFetch: typeof fetch = async (input, init) => {
	const response = await fetch(input, init);
	if (!response.ok) {
		throw new Error(`Request Failed:  ${response.status}`);
	}
	return response;
};

console.log(checkedFetch('https://www.google.com/'));

