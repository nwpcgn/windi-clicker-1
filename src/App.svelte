<script>
	import Game1 from './routes/Game1.svelte'
	import Loader from './lib/Loader.svelte'
	import Toasts from './lib/notes/Toasts.svelte'
	import { sleep } from './lib/util'
	let promise = sleep(1000)
</script>

<Toasts />

<main class="main">
	{#await promise}
		<Loader />
	{:then _}
		<Game1 />
	{/await}
</main>
