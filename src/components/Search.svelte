<script>
	// @ts-nocheck

	import { searchInputValue } from "../stores/appStore";
	import { getDeepValue, unCleanPath } from "../utils/path";

	export let json = {};

	$: arrayPath = unCleanPath($searchInputValue);
	$: value = getDeepValue(json, arrayPath);

	function showValue(value) {
		if (typeof value === "object") {
			value = JSON.stringify(value);
			if (value.length > 30) {
				value = value.slice(0, 30) + "...";
			}
		}

		return value;
	}
</script>

<div class="row">
	<div class="col">
		<span> Property </span>
		<input bind:value={$searchInputValue} />
		<pre class="value">{showValue(value)}</pre>
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
		width: 100%;
		gap: 0.25rem;
	}

	.value {
		color: grey;
	}
</style>
