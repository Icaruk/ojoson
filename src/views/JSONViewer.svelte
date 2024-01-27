<script>
	import BraceWrapper from "../components/BraceWrapper.svelte";
	import Search from "../components/Search.svelte";
	import { getMaxDepth } from "../utils/path";
	import ObjectNode from "./partials/ObjectNode.svelte";

	export let json = {};

	const originalJson = JSON.parse(JSON.stringify(json));
	let jsonInputValue = JSON.stringify(json, null, 2);
	let jsonHasError = false;

	$: maxDepth = getMaxDepth(json);
</script>

<div class="main">
	<div class="section">
		<textarea
			class={jsonHasError ? "error" : ""}
			value={jsonInputValue}
			on:input={ev => {
				try {
					const value = ev.target?.value || "{}";
					const tryParse = JSON.parse(value);
					json = tryParse;
					jsonHasError = false;
				} catch (err) {
					jsonHasError = true;
					console.error(err);
				} finally {
					jsonInputValue = ev.target?.value || "{}";
				}
			}}
		/>
		<button
			class="button-reset"
			on:click={() => {
				json = originalJson;
				jsonInputValue = JSON.stringify(originalJson, null, 2);
				jsonHasError = false;
			}}
		>
			Reset
		</button>
	</div>

	<span class="arrow">→</span>

	<div class="section">
		<div class="border">
			<div class="parsed">
				<Search {json} />

				<BraceWrapper
					depth={0}
					opening={"{"}
				>
					<ObjectNode
						value={json}
						depth={0}
						path={[]}
					/>
				</BraceWrapper>

				<div class="background">
					{#each Array(maxDepth) as _, i}
						<div class="vline" />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 4rem;
	}

	.section {
		height: 90vh;
		width: 33vw;
	}
	.section > textarea {
		width: 100%;
		height: 100%;
	}

	.border {
		border: 1px solid grey;
		height: 100%;
	}
	.error {
		border: 1px solid red;
		background-color: rgba(255, 0, 0, 0.1);
	}
	.error:focus {
		outline-color: red;
	}
	.parsed {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}

	.arrow {
		font-size: 2rem;
	}

	.background {
		position: absolute;
		display: flex;
		column-gap: 1.5rem;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.vline {
		width: 1px;
		height: 100%;
		background-color: rgba(134, 134, 134, 0.1);
	}

	.button-reset {
		width: 100%;
		background-color: rgb(35, 133, 245);
		border: none;
		color: white;
		padding: 0.5rem;
		cursor: pointer;
	}
	.button-reset:hover {
		filter: brightness(0.9);
	}
</style>
