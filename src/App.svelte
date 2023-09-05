<script>
	import Game1 from './lib/Game1.svelte'
	import Loader from './lib/Loader.svelte'
	import Toasts from './lib/notes/Toasts.svelte'
	import { sleep, _user } from './lib/db'
	import { onDestroy, onMount } from 'svelte'
	import { path, resolve, params, match } from 'elegua'

	onMount(() => {
		$_user = { id: 'd2c2a5ee-c32a-4dcc-911f-fc7bfc7dddbb' }
	})

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


