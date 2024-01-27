<script>
	import JsonViewer from "../views/JSONViewer.svelte";

	const jsonData = {
		date: "2021-10-26T16:25:46.446Z",
		num: 123,
		hasError: false,
		isCorrect: true,
		simpleArr: ["a", "b", 1, 2],
		arr2d: ["aaa", 111, true, ["bbb", 222, false]],
		objData: {
			age: 33,
			name: "Pepe",
			moreObjData: {
				moreAge: 44,
				moreName: "Juan",
			},
		},
		fields: [
			{
				id: "63edd51a",
				prop: "pepe",
				value: "ES1045838745737",
				hasError: false,
			},
			{
				very: {
					deep: {
						field: "dark",
					},
				},
			},
		],
	};
</script>

<JsonViewer json={jsonData} />

<style>
	:global(pre) {
		margin: 0;
		font-size: 12px;
	}
</style>
