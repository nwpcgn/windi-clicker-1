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
		context = '1'

	let hiding = false
	const setTimer = () => {
		sleep(70)
			.then(() => {
				hiding = true
				x = getRandInt(0, w)
				y = -200
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

<aside
	style="--x: {x}px; --y: {y}px; --h: {oh}px; --w: {ow}px;"
	on:pointerdown={() => (open = false)}>
	<div>
		<span class="sr-only">{context}</span>
	</div>
</aside>

<style>
	aside {
		position: absolute;
		display: flex;
		width: var(--w, 52px);
		height: var(--h, 56px);
		top: 0;
		left: 0;
		transform: translate(var(--x, 0), var(--y, 0));
		transition: transform 1.5s ease-in;
	}

	div {
		flex: 1;
		position: relative;
	}
	div {
		width: 52px;
		height: 56px;
		background: url('./img/game/boom.png');
	}

	div {
		animation: animGuy 1.1s steps(6) forwards;
		animation-delay: 0.5s;
	}

	/* span {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		animation-name: stretch;
		animation-duration: 2s;
		animation-timing-function: ease-in;
		animation-delay: 0;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		animation-fill-mode: none;
		animation-play-state: running;
	}

	@keyframes stretch {
		0% {
			transform: scale(0.3);
		}
		100% {
			transform: scale(0.9);
		}
	} */

	@keyframes animGuy {
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: -312px;
		}
	}
</style>
