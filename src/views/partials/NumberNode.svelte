<script>
	import BaseNode from "../../components/BaseNode.svelte";

	export let key = "";
	export let value = false;
	export let depth = 0;
</script>

<div>
	<BaseNode
		{depth}
		{key}
	>
		<span
			slot="value"
			class="red">{value}</span
		>
	</BaseNode>
</div>

<style>
	.red {
		color: rgb(201, 1, 204);
	}
</style>
