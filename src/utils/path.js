/**
 * @param {Array<string>} path - the path to be cleaned
 * @return {string} the cleaned path
 */
export function cleanPath(path = []) {
	let cleanPath = "";

	for (let i = 0; i < path.length; i++) {
		const value = path[i];
		const isFirst = i === 0;

		if (isFirst) {
			cleanPath += value;
		} else {
			if (Number.isNaN(+value)) {
				// not number
				cleanPath += `.${value}`;
			} else {
				// is number
				cleanPath += `[${value}]`;
			}
		}
	}

	// Remove trailing dot if present
	cleanPath = cleanPath.replace(/\.$/, "");

	return cleanPath;
}

/**
 * @param {string} path The path to be cleaned
 * @return {Array<string>} The cleaned path
 */
export function unCleanPath(path) {
	const segments = path
		.split(/\.|\[|\]\.?/) // "key.value[2].asd[3][4]" --> ['key', 'value', '2', 'asd', '3', '', '4', '']
		.filter((segment) => segment !== "");

	return segments;
}

/**
 * @param {Object.<string, any>} obj
 * @param {Array<string>} path
 * @return {any}
 */
export function getDeepValue(obj = {}, path = []) {
	const value = path.reduce((acc, key) => {
		if (acc && acc[key] === undefined) {
			return undefined;
		}

		return acc[key];
	}, obj);

	return value;
}

const obj = {
	date: "2021-10-26T16:25:46.446Z",
	num: 123,
	hasError: false,
	isCorrect: true,
	simpleArr: ["a", "b", 1, 2],
	arr2d: ["aaa", 111, true, ["bbb", 222, false]],
	objData: {
		age: 33,
		name: "Pepe",
		moreObjData: {
			moreAge: 44,
			moreName: "Juan",
		},
	},
	fields: [
		{
			id: "63edd51a",
			prop: "pepe",
			value: "ES1045838745737",
			hasError: false,
		},
	],
};

/**
 * @link https://stackoverflow.com/a/66065316/10620020
 *
 * @param {Object} obj
 * @return {number}
 */
export function getMaxDepth(obj) {
	if (Object(obj) !== obj) {
		return 0;
	}

	return 1 + Math.max(-1, ...Object.values(obj).map(getMaxDepth));
}
