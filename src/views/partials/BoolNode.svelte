<script>
	import BaseNode from "../../components/BaseNode.svelte";

	export let key = "";
	export let value = false;
	export let depth = 0;
	/** @type {Array<string>} */
	export let path = [];

	let valueClass = "color";
</script>

<BaseNode
	{depth}
	{key}
	{path}
>
	<span
		slot="value"
		class={valueClass}
	>
		{value}
	</span>
</BaseNode>

<style>
	.color {
		color: rgb(17, 69, 117);
	}
</style>
