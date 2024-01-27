<script>
	import Brace from "./Brace.svelte";

	export let opening = "";
	export let closing = "";
	export let depth = 0;

	if (opening === "{") {
		closing = "}";
	}

	if (opening === "[") {
		closing = "]";
	}
</script>

<div class="row">
	<Brace
		brace={opening}
		{depth}
	/>
	<slot />
	<Brace
		brace={closing}
		{depth}
	/>
</div>
