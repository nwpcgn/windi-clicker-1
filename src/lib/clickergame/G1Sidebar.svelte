<script>
	import { clickOutside } from '../db'
	export let sb = false
	const close = () => {
		sb = false
	}
</script>

<div class="fixed inset-0 z-20 bg-black bg-opacity-40" class:hidden={!sb} />
<aside
	use:clickOutside
	on:click_outside={close}
	class="sidebar"
	class:open={sb}>
	<slot {close}><!-- optional fallback --></slot>
</aside>

<style>
	.sidebar {
		@apply absolute inset-y-0 right-0 w-80 z-30;
		@apply bg-white border-l;
		@apply transform transition-transform translate-x-full duration-500 ease;
		@apply flex flex-col overflow-x-hidden overflow-y-auto;
	}
	.sidebar.open {
		@apply translate-x-0;
	}
	/* :global(.sidebar > *) {
		@apply px-4;
	} */
</style>
