<script>
	export let key = "";
	export let depth = 0;
	export let onlyKey = false;

	let styles = {
		"padding-left": `${depth * 1.5}rem`, // 1 depth = 1.5rem = 24px
	};

	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `${key}:${value}`)
		.join(";");
</script>

<div style={cssVarStyles}>
	<pre class="key">"{key}":</pre>
</div>

<style>
	.key {
		display: flex;
	}
	pre {
		margin: 0;
	}
</style>
