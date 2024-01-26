<script>
	import BaseNode from "../../components/BaseNode.svelte";
	import NodeWrapper from "../../components/NodeWrapper.svelte";

	export let key = "";
	export let value = false;
	export let showKey = true;
	export let depth = 0;

	let valueClass = "green";

	$: if (value) {
		valueClass = "green";
	} else {
		valueClass = "red";
	}
</script>

<BaseNode {depth}>
	<span slot="key">
		{#if showKey}
			{key}
		{/if}
	</span>

	<span
		slot="value"
		class={valueClass}>{value}</span
	>
</BaseNode>

<style>
	.green {
		color: green;
	}

	.red {
		color: red;
	}
</style>
