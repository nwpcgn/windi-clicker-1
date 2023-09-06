<script>
	import Layer from '../lib/clickergame/Layer.svelte'
	import { path } from 'elegua'
</script>

<Layer>
	<div class="m-auto text-center gap-4 grid">
		<h1 class="text-8xl font-bold text-red-600">404</h1>
		<h3 class="text-4xl font-semibold text-red-600">
			Path <em class="text-2xl text-gray-600 font-light px-2">'{$path}'</em>
			not found
		</h3>
		<p><a href="/" class="text-4xl font-bold text-blue-600">Home</a></p>
	</div>
</Layer>

<style>
</style>
