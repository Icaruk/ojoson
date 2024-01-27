<script>
	import BaseNode from "../../components/BaseNode.svelte";

	export let key = "";
	export let value = false;
	export let depth = 0;
	/** @type {Array<string>} */
	export let path = [];
</script>

<div>
	<BaseNode
		{depth}
		{key}
		{path}
	>
		<span
			slot="value"
			class="red"
			>{value}
		</span>
	</BaseNode>
</div>

<style>
	.red {
		color: rgb(58, 139, 33);
	}
</style>
