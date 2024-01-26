<script>
	import { getValueType } from "../../utils/getValueType";
	import BoolNode from "./BoolNode.svelte";
	import StringNode from "./StringNode.svelte";
	import NumberNode from "./NumberNode.svelte";
	import ArrayNode from "./ArrayNode.svelte";
	import ParentNode from "./ParentNode.svelte";
	import Key from "../../components/Key.svelte";

	export let key = "";
	/** @type {{ [key: string]: any | Array<any> }} */
	export let value = {};
	export let depth = 0;
	export let showBrackets = true;

	/**
	 * @type {{ [key: string]: any }}
	 */
	let components = {
		boolean: BoolNode,
		string: StringNode,
		number: NumberNode,
		array: ArrayNode,
		object: ParentNode,
		none: "",
	};
</script>

{#if showBrackets}
	<Key {depth}>
		{key + " {"}
	</Key>
{/if}

{#each Object.keys(value) as _key}
	{@const type = getValueType(value[_key])}

	<svelte:component
		this={components[type]}
		showKey={true}
		key={_key}
		value={value[_key]}
		depth={depth + 1}
	/>
{/each}

{#if showBrackets}
	<Key {depth}>
		{"}"}
	</Key>
{/if}
