<script>
	import BaseNode from "../../components/BaseNode.svelte";

	export let key = "";
	export let value = false;
	export let showKey = true;
	export let depth = 0;
</script>

<div>
	<BaseNode
		{depth}
		{key}
	>
		<span
			slot="value"
			class="orange">"{value}"</span
		>
	</BaseNode>
</div>

<style>
	.orange {
		color: rgb(240, 142, 22);
	}
</style>
