<script>
	export let depth = 0;

	let styles = {
		"padding-left": `${depth * 1.5}rem`, // 1 depth = 1.5rem = 24px
	};

	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `${key}:${value}`)
		.join(";");
</script>

<div style={cssVarStyles}>
	<div class="key">
		<slot />
	</div>
</div>

<style>
	.key {
		padding: 0.2rem 0.25rem;
	}
</style>
