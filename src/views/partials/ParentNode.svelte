<script>
	import { getValueType } from "../../utils/getValueType";
	import BoolNode from "./BoolNode.svelte";
	import StringNode from "./StringNode.svelte";
	import NumberNode from "./NumberNode.svelte";
	import ObjectNode from "./ObjectNode.svelte";
	import ArrayNode from "./ArrayNode.svelte";

	/** @type {{ [key: string]: any }} */
	export let value = {};
	export let depth = 0;

	/**
	 * @type {{ [key: string]: any }}
	 */
	let components = {
		boolean: BoolNode,
		string: StringNode,
		number: NumberNode,
		object: ObjectNode,
		array: ArrayNode,
		none: "",
	};
</script>

{#each Object.keys(value) as _key}
	{@const type = getValueType(value[_key])}

	<svelte:component
		this={components[type]}
		key={_key}
		value={value[_key]}
		depth={depth + 1}
	/>
{/each}
