<script>
	export let src = './img/game/gifa4.jpg'
	export let blur = false
	export let gray = false
	export let hide = false
	export let contain = false
</script>

<section class="img-layer" class:hide {...$$restProps}>
	{#if !contain}
		<img {src} alt="img" class="layer-img" class:blur class:gray />
	{:else}
		<img {src} alt="img" class="contain-image" />
	{/if}
</section>

<style>
	.img-layer {
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
	}
	.contain-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		margin: auto 0 0;
	}
	.layer-img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		object-position: center;
		transition: opacity 800ms cubic-bezier(0.42, -0, 0.58, 1) 100ms,
			filter 500ms ease;
	}
	.layer-img {
		--tw-blur: var(--tw-empty, /*!*/ /*!*/);
		--tw-brightness: var(--tw-empty, /*!*/ /*!*/);
		--tw-contrast: var(--tw-empty, /*!*/ /*!*/);
		--tw-grayscale: var(--tw-empty, /*!*/ /*!*/);
		--tw-hue-rotate: var(--tw-empty, /*!*/ /*!*/);
		--tw-invert: var(--tw-empty, /*!*/ /*!*/);
		--tw-saturate: var(--tw-empty, /*!*/ /*!*/);
		--tw-sepia: var(--tw-empty, /*!*/ /*!*/);
		--tw-drop-shadow: var(--tw-empty, /*!*/ /*!*/);
		-webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
			var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
			var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
			var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
			var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
	}
	.hide {
		opacity: 0;
	}
	.blur {
		--tw-blur: blur(8px);
	}
	.gray {
		--tw-grayscale: grayscale(100%);
	}
</style>
