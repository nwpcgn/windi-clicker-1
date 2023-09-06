<script>
	import { fly, fade } from 'svelte/transition'
	import { quintIn } from 'svelte/easing'
	export let hide = false
	export let body = false
</script>

<section
	in:fly={{ duration: 400, y: 300, easing: quintIn, delay: 50 }}
	out:fade={{ duration: 200, delay: 50 }}
	class="game-layer"
	class:body
	class:hide
	{...$$restProps}>
	<slot />
</section>

<style>
	.game-layer {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 600ms cubic-bezier(0.42, -0, 0.58, 1) 110ms,
			transform 500ms cubic-bezier(0.42, -0, 0.58, 1) 10ms;
		overflow: hidden;
		z-index: var(--z, auto);
		display: flex;
		flex-direction: column;
	}

	.game-layer.body {
		padding: var(--p, 0.5rem);
	}
	.hide {
		opacity: 0;
	}
</style>
