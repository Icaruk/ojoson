<script>
	import { searchInputValue } from "../stores/appStore";
	import { cleanPath } from "../utils/path";
	import { getIdentationFromDepth } from "../utils/getIdentationFromDepth";

	export let key = "";
	export let depth = 0;
	/** @type {Array<string>} */
	export let path = [];

	let styles = {
		"padding-left": getIdentationFromDepth(depth),
	};

	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `${key}:${value}`)
		.join(";");

	function handleKeyClick() {
		searchInputValue.set(cleanPath(path));
	}
</script>

<div style={cssVarStyles}>
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<pre
		class="key"
		on:click={handleKeyClick}>"{key}":</pre>
</div>

<style>
	.key {
		display: flex;
		color: rgb(0, 153, 255);
		cursor: pointer;
	}
	.key:hover {
		text-decoration: underline;
	}
</style>
