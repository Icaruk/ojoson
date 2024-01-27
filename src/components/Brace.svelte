<script>
	import { getIdentationFromDepth } from "../utils/getIdentationFromDepth";

	export let brace = "";
	export let depth = 0;
	export let trailingComma = false;

	if (trailingComma) {
		brace = `${brace},`;
	}

	let styles = {
		"padding-left": getIdentationFromDepth(depth),
	};

	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `${key}:${value}`)
		.join(";");
</script>

<div style={cssVarStyles}>
	<pre class="key">{brace}</pre>
</div>

<style>
	.key {
		display: flex;
	}
</style>
