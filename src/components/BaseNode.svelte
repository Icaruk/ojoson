<script>
	import Key from "./Key.svelte";

	export let depth = 0;
</script>

<div class="row">
	<div class="key">
		<Key {depth}>
			<slot name="key" />
		</Key>
	</div>

	<div class="value">
		<slot name="value" />
	</div>
</div>

<style>
	.row {
		display: flex;
		gap: 0.5rem;
	}
	.value {
		padding: 0.2rem 0.5rem;
		cursor: pointer;
	}
	.value:hover {
		background-color: rgb(198, 198, 255);
	}
</style>
