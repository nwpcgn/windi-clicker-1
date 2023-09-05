<script>
	import Toast from './Toast.svelte';
	import { dismissToast, toasts } from './toast';
</script>

{#if $toasts.length}
	<section>
		{#each $toasts as toast (toast.id)}
			<Toast
				type={toast.type}
				dismissible={toast.dismissible}
				on:dismiss={() => dismissToast(toast.id)}>{@html toast.message}</Toast
			>
		{/each}
	</section>
{/if}

<style>
	section {
		position: fixed;
		top: 1rem;
		right: 1rem;
		max-width: 560px;
		display: flex;
		justify-content: end;
		flex-direction: column;
		padding: 0rem;
		gap: 0.4rem;
		z-index: 1000;
	}
</style>
