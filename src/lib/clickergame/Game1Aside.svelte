<script>
	export let sb = false
	function toggle() {
		sb = !sb
	}
</script>

<!-- <aside class="aside">
	<div class="h-12 w-12" />
	<section
		class="absolute bg-gray-900 divide-blue-500 divide-x flex inset-0 text-blue-500 z-10 md:divide-x-0 md:divide-y md:flex-col">
	</section>
</aside> -->

<button on:click={toggle} class="flex h-12 items-center justify-center w-12">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="1em"
		height="1em"
		class="h-6 w-6">
		<g>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
		</g>
	</svg>
	<span class="sr-only">Click me!</span>
</button>
<span class="flex-1" />
<button class="flex h-12 items-center justify-center w-12">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="1em"
		height="1em"
		class="h-6 w-6">
		<g>
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				fill-rule="nonzero"
				d="M18.901 10a2.999 2.999 0 0 0 4.075 1.113 3.5 3.5 0 0 1-1.975 3.55L21 21h-7v-2a2 2 0 0 0-1.85-1.995L12 17a2 2 0 0 0-1.995 1.85L10 19v2H3v-6.336a3.5 3.5 0 0 1-1.979-3.553A2.999 2.999 0 0 0 5.098 10h13.803zm-.971 2H6.069l-.076.079c-.431.42-.935.76-1.486 1.002l-.096.039.589.28-.001 5.6 3.002-.001v-.072l.01-.223c.149-2.016 1.78-3.599 3.854-3.698l.208-.005.223.01a4 4 0 0 1 3.699 3.787l.004.201L19 19l.001-5.6.587-.28-.095-.04a5.002 5.002 0 0 1-1.486-1.001L17.93 12zm-.894-9a3.5 3.5 0 0 0 4.446 2.86 3.5 3.5 0 0 1-3.29 3.135L18 9H6a3.5 3.5 0 0 1-3.482-3.14A3.5 3.5 0 0 0 6.964 3h10.072zM15.6 5H8.399a5.507 5.507 0 0 1-1.49 1.816L6.661 7h10.677l-.012-.008a5.518 5.518 0 0 1-1.579-1.722L15.6 5z" />
		</g>
	</svg>
	<span class="sr-only">Click me!</span>
</button>
<button class="flex h-12 items-center justify-center w-12">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="1em"
		height="1em"
		class="h-6 w-6">
		<g>
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zm-2 0V4H5v16h14zM8 11h3v2H8v-2zm0-4h3v2H8V7zm0 8h3v2H8v-2zm5 0h3v2h-3v-2zm0-4h3v2h-3v-2zm0-4h3v2h-3V7z" />
		</g>
	</svg>
	<span class="sr-only">Click me!</span>
</button>
<button class="flex h-12 items-center justify-center w-12">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="1em"
		height="1em"
		class="h-6 w-6">
		<g>
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				d="M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3V8zM6 5v1h12V5H6z" />
		</g>
	</svg>
	<span class="sr-only">Click me!</span>
</button>
<span class="h-12 w-12" />
<button class="flex h-12 items-center justify-center w-12">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="1em"
		height="1em"
		class="h-6 w-6">
		<g>
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				d="M2 12c0-.865.11-1.703.316-2.504A3 3 0 0 0 4.99 4.867a9.99 9.99 0 0 1 4.335-2.505 3 3 0 0 0 5.348 0 9.99 9.99 0 0 1 4.335 2.505 3 3 0 0 0 2.675 4.63c.206.8.316 1.638.316 2.503 0 .865-.11 1.703-.316 2.504a3 3 0 0 0-2.675 4.629 9.99 9.99 0 0 1-4.335 2.505 3 3 0 0 0-5.348 0 9.99 9.99 0 0 1-4.335-2.505 3 3 0 0 0-2.675-4.63C2.11 13.704 2 12.866 2 12zm4.804 3c.63 1.091.81 2.346.564 3.524.408.29.842.541 1.297.75A4.993 4.993 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274.455-.209.889-.46 1.297-.75A4.993 4.993 0 0 1 17.196 15a4.993 4.993 0 0 1 2.77-2.25 8.126 8.126 0 0 0 0-1.5A4.993 4.993 0 0 1 17.195 9a4.993 4.993 0 0 1-.564-3.524 7.989 7.989 0 0 0-1.297-.75A4.993 4.993 0 0 1 12 6a4.993 4.993 0 0 1-3.335-1.274 7.99 7.99 0 0 0-1.297.75A4.993 4.993 0 0 1 6.804 9a4.993 4.993 0 0 1-2.77 2.25 8.126 8.126 0 0 0 0 1.5A4.993 4.993 0 0 1 6.805 15zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
		</g>
	</svg>
	<span class="sr-only">Click me!</span>
</button>

<!-- <style>
	.page-grid .aside,
	.aside {
		grid-area: aside;
		position: relative;
		overflow: hidden;
	}
</style> -->
