<script>
	import Game1 from './lib/Game1.svelte'
	import Loader from './lib/Loader.svelte'
	import Toasts from './lib/notes/Toasts.svelte'
	import { sleep } from './lib/util'
	import { path } from 'elegua'

	let promise = sleep(1000)
</script>

<Toasts />

<main data-pg-class-style="main" class="main">
	{#await promise}
		<Loader />
	{:then _}
		{#if $path === '/'}
			<Game1 />
		{:else}
			<section class="layer">
				<div class="m-auto text-center text-red-600">
					<h1>404</h1>
					<p>Not found: {$path}</p>
				</div>
			</section>
		{/if}
	{/await}
</main>
