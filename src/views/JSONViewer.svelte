<script>
	import ParentNode from "./partials/ParentNode.svelte";

	export let json = {};
</script>

<div class="row">
	<div>
		<h1>Obj</h1>
		<pre>{JSON.stringify(json, null, 2)}</pre>
	</div>

	<div class="parsed">
		<h1>Parsed</h1>
		<ParentNode
			value={json}
			depth={-1}
		/>
		<div class="background">
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
			<div class="vline" />
		</div>
	</div>
</div>

<style>
	.row {
		display: flex;
		gap: 10rem;
	}
	.parsed {
		position: relative;
	}
	.background {
		position: absolute;
		display: flex;
		column-gap: 1.5rem;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.vline {
		width: 1px;
		height: 100%;
		background-color: rgba(255, 0, 0, 0.1);
	}
</style>
