<script>
	import MoveObj from './MoveObj.svelte'
	const click_audio = new Audio('./audio/open1.ogg')
	let w = 0,
		h = 0,
		x = 0,
		y = 0,
		t1,
		t2,
		ow = 52,
		oh = 56,
		keyCode,
		maxX,
		maxY
	let gameObj
	export let game
	export let running = false
	export let showing = false
	export let active = false

	const playAudio = (audioObj) => {
		audioObj.volume = 0.2
		if (audioObj.duration > 0 && !audioObj.paused) {
			//already playing
			audioObj.pause()
			audioObj.currentTime = 0
			audioObj.play()
		} else {
			//not playing
			audioObj.play()
		}
	}

	const getRandInt = (min, max) => Math.random() * (max - min) + min

	const clickAction = () => {
		addObj()
		playAudio(click_audio)
		game.total += game.ticker.click
	}
	const hiding = () => {
		showing = false
	}
	const deactivate = () => {
		running = false
		t2 = setTimeout(hiding, 1000)
	}
	const handleMouseDown = () => {
		if (t1) clearTimeout(t1)
		if (t2) clearTimeout(t2)

		showing = true
		running = true
		t1 = setTimeout(deactivate, 2000)
	}
	const handleClick = (event) => {
		event.target.blur()
		clickAction()
	}
	const handleKeydown = (event) => {
		keyCode = event.keyCode
		if (keyCode === 32) {
			active = true
		}
	}
	const handleKeyUp = (event) => {
		keyCode = event.keyCode
		if (keyCode === 32) {
			clickAction()
			handleMouseDown()
			active = false
		}
	}

	const resized = (w, h) => {
		maxX = w - ow - 5
		maxY = h - oh - 5
	}

	const insertObj = () => {
		if (!gameObj) return

		const d = new MoveObj({
			target: gameObj,
			props: { x, y, ow, oh, w, context: game.total }
		})
		d.$on('close', () => d.$destroy())
	}

	const addObj = () => {
		let inX = getRandInt(5, maxX),
			inY = getRandInt(50, maxY)
		x = inX.toFixed(0)
		y = inY.toFixed(0)
		insertObj()
	}

	$: resized(w, h)
</script>

<div
	bind:this={gameObj}
	bind:clientHeight={h}
	bind:clientWidth={w}
	class="p-4 flex items-center justify-center relative flex-1 border border-dashed">
	<button
		style="--bw: 8px; --py: 2rem; --fs: 1.8rem;"
		class="sf-panel block text-center w-full"
		class:active
		on:mousedown={handleMouseDown}
		on:click={handleClick}>
		Spacebar
	</button>
	<footer class="absolute inset-x-0 bottom-0">
		<div class="text-center p-2">
			<span
				class="badge {running ? 'success' : 'warning'}"
				class:hiding={!showing}>
				... {running ? 'running' : 'waiting'}
			</span>
		</div>
	</footer>
</div>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyUp} />

<style>
	.sf-panel {
		--lh: 1.5rem;
		--br: 0.25rem;
		--px: 1rem;
		/* --bw: 4px;
		--py: 0.5rem;
		--fs: 1.25rem; */
		--bw: 8px;
		--py: 2rem;
		--fs: 1.8rem;
		--tw-bg-opacity: 1;
		--tw-text-opacity: 1;
		--tw-gradient-from: rgba(2, 132, 199, 0.5);
		--tw-gradient-stops: var(--tw-gradient-from),
			var(--tw-gradient-to, rgba(255, 255, 255, 0));
		--tw-border-opacity: 1;
		-o-text-overflow: ellipsis;
		background-color: rgba(12, 74, 110, var(--tw-bg-opacity));
		background-image: -o-linear-gradient(bottom, var(--tw-gradient-stops));
		background-image: -webkit-gradient(
			linear,
			left bottom,
			left top,
			from(var(--tw-gradient-stops))
		);
		background-image: linear-gradient(to top, var(--tw-gradient-stops));
		border-color: rgba(14, 165, 233, var(--tw-border-opacity));
		border-radius: var(--br, 0.25rem);
		border-style: solid;
		border-width: var(--bw, 4px);
		color: rgba(14, 165, 233, var(--tw-text-opacity));
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			'Liberation Mono', 'Courier New', monospace;
		font-size: var(--fs, 1.25rem); /* 20px */
		font-weight: 600;
		line-height: var(--lh, 1.5rem);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: var(--py) var(--px);
	}
	button {
		transform: scale(1);
		opacity: 1;
		transition: opacity 0.1s ease, transform 0.2s ease;
		/* transform: matrix(1, 0.02, 0, 1, 0, 50); */
	}

	button:active,
	button.active {
		transform: scale(0.92);
		opacity: 0.7;
	}

	.badge {
		@apply inline-block whitespace-nowrap rounded-full;
		@apply px-[0.75em] pb-[0.35em] pt-[0.45em] text-[1em];
		@apply font-semibold leading-none text-center align-baseline;
		@apply transition-all duration-500 ease-in-out;
	}

	.badge.warning {
		@apply bg-amber-100  text-amber-800;
	}
	.badge.success {
		@apply bg-emerald-100  text-emerald-800;
	}
	.badge.hiding {
		@apply bg-gray-100  text-gray-800 opacity-5 transition-all ease duration-700;
	}
</style>
