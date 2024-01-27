<script>
	import Key from "./Key.svelte";

	export let depth = 0;
	export let key = "";
</script>

<div class="row">
	<Key
		{depth}
		{key}
	/>

	<pre class="value">
		<slot name="value" />
	</pre>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
		height: 1.5rem;
		line-height: 0px;
		gap: 0.5rem;
	}
	.value {
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	.value:hover {
		background-color: rgb(198, 198, 255);
	}
</style>
