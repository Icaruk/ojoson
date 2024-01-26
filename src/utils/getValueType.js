/**
 * @param {any} value
 * @returns {string}
 */
export function getValueType(value) {
	let type = "";
	if (Array.isArray(value)) {
		type = "array";
	} else {
		type = typeof value;
	}
	return type;
}