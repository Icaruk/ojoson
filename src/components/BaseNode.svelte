<script>
	import Key from "./Key.svelte";

	export let depth = 0;
	export let key = "";
	/** @type {Array<string>} */
	export let path = [];
</script>

<div class="row">
	<Key
		{depth}
		{key}
		{path}
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
		height: 1rem;
		width: min-content;
	}
	.value:hover {
		background: rgba(41, 41, 253, 0.116);
	}
</style>
