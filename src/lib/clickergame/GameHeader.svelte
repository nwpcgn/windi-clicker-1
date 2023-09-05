<script>
	import { addkomma } from '../util'
	export let game
</script>

<div class="p-4">
	<header class="header-grid">
		<div class="logo">
			<h1 class="font-bold font-serif text-4xl">Heading 1</h1>
		</div>
		<div class="stat">
			<div class="sf-panel">
				<span class="">{addkomma(game.ticker.click)}</span>
				<small class="">€/click</small>
			</div>
			<div class="sf-panel">
				<span class="">{addkomma(game.ticker.auto)}</span>
				<small class="">€/sec</small>
			</div>
		</div>
		<div class="amount">
			<span style="flex-grow: 1;" />
			<div class="sf-panel">
				<span class="">{addkomma(game.total)}</span>
				<span class="">€</span>
			</div>
		</div>
	</header>
</div>

<style>
	.sf-panel {
		--lh: 1.5rem;
		--bw: 4px;
		--br: 0.25rem;
		--px: 1rem;
		--py: 0.5rem;
		--fs: 1.25rem;
		--tw-bg-opacity: 1;
		--tw-text-opacity: 1;
		--tw-gradient-from: rgba(2, 132, 199, 0.5);
		--tw-gradient-stops: var(--tw-gradient-from),
			var(--tw-gradient-to, rgba(255, 255, 255, 0));
		--tw-border-opacity: 1;
		-o-text-overflow: ellipsis;
		background-color: rgba(12, 74, 110, var(--tw-bg-opacity));
		background-image: -o-linear-gradient(bottom, var(--tw-gradient-stops));
		background-image: -webkit-gradient(
			linear,
			left bottom,
			left top,
			from(var(--tw-gradient-stops))
		);
		background-image: linear-gradient(to top, var(--tw-gradient-stops));
		border-color: rgba(14, 165, 233, var(--tw-border-opacity));
		border-radius: var(--br, 0.25rem);
		border-style: solid;
		border-width: var(--bw, 4px);
		color: rgba(14, 165, 233, var(--tw-text-opacity));
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			'Liberation Mono', 'Courier New', monospace;
		font-size: var(--fs, 1.25rem); /* 20px */
		font-weight: 600;
		line-height: var(--lh, 1.5rem);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: var(--py) var(--px);
	}

	.header-grid {
		display: grid;
		grid-template-columns: 1fr fit-content(70%);
		grid-template-rows: fit-content(120px) fit-content(120px);
		grid-template-areas: 'logo stat' 'amount amount';
		gap: 0.5rem;
	}

	.amount {
		grid-area: amount;
		display: flex;
		align-items: center;
	}

	.stat {
		grid-area: stat;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo {
		grid-area: logo;
		display: flex;
		align-items: center;
	}
</style>
