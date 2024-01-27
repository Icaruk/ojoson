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
		<span>,</span>
	</pre>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
		line-height: 0px;
		gap: 0.5rem;
	}
	.value {
		display: flex;
		align-items: center;
		cursor: pointer;
		height: 1rem;
		width: min-content;
	}
	.value:hover {
		background: rgba(41, 41, 253, 0.116);
	}
</style>
