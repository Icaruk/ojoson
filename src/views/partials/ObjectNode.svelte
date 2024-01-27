<script>
	import Key from "../../components/Key.svelte";
	import { getValueType } from "../../utils/getValueType";
	import BoolNode from "./BoolNode.svelte";
	import NumberNode from "./NumberNode.svelte";
	import StringNode from "./StringNode.svelte";

	export let key = "";
	/** @type {{ [key: string]: any | Array<any> }} */
	export let value = {};
	export let depth = 0;

	$: valueType = getValueType(value);

	/**
	 * @type {{ [key: string]: any }}
	 */
	let components = {
		boolean: BoolNode,
		string: StringNode,
		number: NumberNode,
		none: "",
	};
</script>

{#if ["array", "object"].includes(valueType) && depth > 0}
	<Key
		{depth}
		{key}
	/>
{/if}

{#each Object.keys(value) as _key}
	{@const type = getValueType(value[_key])}

	{#if type === "object"}
		<svelte:self
			key={_key}
			value={value[_key]}
			depth={depth + 1}
		/>
	{:else if type === "array"}
		<svelte:self
			key={_key}
			value={value[_key]}
			depth={depth + 1}
		/>
	{:else}
		<svelte:component
			this={components[type]}
			key={_key}
			value={value[_key]}
			depth={depth + 1}
		/>
	{/if}
{/each}
