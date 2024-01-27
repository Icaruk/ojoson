<script>
	import Key from "../../components/Key.svelte";
	import { getValueType } from "../../utils/getValueType";
	import BoolNode from "./BoolNode.svelte";
	import NumberNode from "./NumberNode.svelte";
	import StringNode from "./StringNode.svelte";
	import BraceWrapper from "../../components/BraceWrapper.svelte";
	import Brace from "../../components/Brace.svelte";

	export let key = "";
	/** @type {{ [key: string]: any | Array<any> }} */
	export let value = {};
	export let depth = 0;

	const valueType = getValueType(value);
	let openingBrace = "";
	let closingBrace = "";

	switch (valueType) {
		case "array":
			openingBrace = "[";
			closingBrace = "]";
			break;
		case "object":
			openingBrace = "{";
			closingBrace = "}";
			break;
		default:
			openingBrace = "";
			closingBrace = "";
	}

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
	<div class="row">
		<Key
			{depth}
			{key}
		/>
		<Brace
			{depth}
			brace={openingBrace}
		/>
	</div>
{/if}

{#each Object.keys(value) as _key}
	{@const _type = getValueType(value[_key])}

	{#if ["object", "array"].includes(_type)}
		<svelte:self
			key={_key}
			value={value[_key]}
			depth={depth + 1}
		/>
	{:else}
		<svelte:component
			this={components[_type]}
			key={_key}
			value={value[_key]}
			depth={depth + 1}
		/>
	{/if}
{/each}

{#if ["array", "object"].includes(valueType) && depth > 0}
	<Brace
		{depth}
		brace={closingBrace}
		trailingComma={true}
	/>
{/if}

<style>
	.row {
		display: flex;
	}
</style>
