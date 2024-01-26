<script>
	import Key from "../../components/Key.svelte";
	import ObjectNode from "./ObjectNode.svelte";

	/** @type {Array<any>} */
	export let value = [];
	export let key = "";
	export let depth = 0;
</script>

<Key {depth}>
	{key + ": ["}
</Key>

<ObjectNode
	{value}
	depth={depth + 1}
	showBrackets={false}
/>

<Key {depth}>
	{"]"}
</Key>
