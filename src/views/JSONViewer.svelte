<script>
	import BraceWrapper from "../components/BraceWrapper.svelte";
	import Search from "../components/Search.svelte";
	import ObjectNode from "./partials/ObjectNode.svelte";

	export let json = {};
</script>

<div class="row">
	<div>
		<h1>Obj</h1>
		<pre>{JSON.stringify(json, null, 2)}</pre>
	</div>

	<div class="parsed">
		<h1>Parsed</h1>

		<Search />

		<BraceWrapper
			depth={0}
			opening={"{"}
		>
			<ObjectNode
				value={json}
				depth={0}
			/>
		</BraceWrapper>

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
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 1rem;
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
		background-color: rgba(134, 134, 134, 0.1);
	}
</style>
