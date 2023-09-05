<script>
	import { createEventDispatcher, onMount } from 'svelte'
	import { sleep, getRandInt } from '../util'
	const dispatch = createEventDispatcher()
	export let open = true
	export let x = 0,
		y = 0,
		ow = 50,
		oh = 50,
		w = 100,
		h = 100

	let hiding = false
	const setTimer = () => {
		sleep(500)
			.then(() => {
				hiding = true
				x = getRandInt(0, w)
				y = -100
			})
			.then(() => sleep(1800))
			.then(() => {
				open = false
			})
	}

	onMount(() => {
		setTimer()
	})

	$: dispatch(open ? 'open' : 'close')
</script>

<div
	style="--x: {x}px; --y: {y}px; --h: {oh}px; --w: {ow}px;"
	class="border border-dashed border-red-600 border-4 rounded-md"
	on:mousedown={() => (open = false)}>
	<!-- <div><button on:click={() => open = false}>Close</button></div> -->
</div>

<style>
	div {
		position: absolute;
		display: inline-flex;
		width: var(--w, 50px);
		height: var(--h, 50px);
		top: 0;
		left: 0;
		transform: translate(var(--x, 0), var(--y, 0));
		transition: transform 2s ease-in-out;
	}
</style>
