/**
 * @param {number} depth
 * @return {string} Example: `"1.5rem"`
 */
export function getIdentationFromDepth(depth = 0) {
	return `${depth * 1.5}rem`; // 1 depth = 1.5rem = 24px
}
