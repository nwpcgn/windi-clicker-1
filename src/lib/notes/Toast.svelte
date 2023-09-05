<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	const successIcon = `<svg class="icon icon-success"><use xlink:href="#icon-success"></use></svg>`;
	const errorIcon = `<svg class="icon icon-error"><use xlink:href="#icon-error"></use></svg>`;
	const infoIcon = `<svg class="icon icon-info"><use xlink:href="#icon-info"></use></svg>`;
	const closeIcon = `<svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg>`;

	const dispatch = createEventDispatcher();

	export let type = 'error';
	export let dismissible = true;
</script>

<article class={type} role="alert" in:slide out:fade>
	<span class="svg">
		{#if type === 'success'}
			{@html successIcon}
		{:else if type === 'error'}
			{@html errorIcon}
		{:else}
			{@html infoIcon}
		{/if}
	</span>
	<div class="text">
		<slot />
	</div>

	{#if dismissible}
		<button class="close" on:click={() => dispatch('dismiss')}>
			{@html closeIcon}
		</button>
	{/if}
</article>

<svg
	aria-hidden="true"
	style="position: absolute; width: 0; height: 0; overflow: hidden;"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<defs>
		<symbol id="icon-info" viewBox="0 0 24 24">
			<path
				d="M12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM11.016 6.984h1.969v6h-1.969v-6zM11.016 15h1.969v2.016h-1.969v-2.016z"
			/>
		</symbol>
		<symbol id="icon-close" viewBox="0 0 24 24">
			<path
				d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"
			/>
		</symbol>
		<symbol id="icon-error" viewBox="0 0 24 24">
			<path
				d="M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"
			/>
		</symbol>
		<symbol id="icon-success" viewBox="0 0 24 24">
			<path d="M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z" />
		</symbol>
	</defs>
</svg>

<style>
	article {
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 0.2rem;
		display: flex;
		align-items: center;
		margin: 0 0 0 auto;
		width: 300px;
		max-width: 480px;
	}
	.error {
		background: IndianRed;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: SkyBlue;
	}
	.text {
		margin-left: 1rem;
	}

	.svg {
		font-size: 1.3rem;
	}

	button {
		color: white;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1.3rem;
	}
</style>
