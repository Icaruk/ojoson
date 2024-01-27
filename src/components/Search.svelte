<script>
	import { getContext } from "svelte";

	const app = getContext("app");

	$: search = app.search ?? "";

	console.log("Search", search);
</script>

<div class="row">
	<div class="col">
		<span> Property </span>
		<input bind:value={app.search} />
	</div>

	<div class="col">
		<span> Variable </span>
		<input />
	</div>
</div>

<style>
	.row {
		display: flex;
		gap: 1rem;
	}
	.col {
		display: flex;
		flex-direction: column;
	}
</style>
