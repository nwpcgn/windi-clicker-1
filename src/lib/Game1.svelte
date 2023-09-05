<script>
	import ClickerGrid from './clickergame/ClickerGrid.svelte'
	import G1Btn from './clickergame/G1Btn.svelte'
	import G1SideBar from './clickergame/G1Sidebar.svelte'
	import Game1Aside from './clickergame/Game1Aside.svelte'
	import GameHeader from './clickergame/GameHeader.svelte'
	import ImageLayer from './clickergame/ImageLayer.svelte'
	import Layer from './clickergame/Layer.svelte'
	// const initData = async () => {}
	const clicker = {
		total: 0,
		ticker: {
			auto: 0,
			click: 1
		},
		upgrades: {
			r1: {
				name: 'Resource 1',
				own: 0,
				eff: 1,
				cost: 15,
				slug: 'click',
				add: 0,
				max: 0,
				boost: 1
			},
			r2: {
				name: 'Resource 2',
				own: 0,
				eff: 1,
				cost: 25,
				slug: 'auto',
				add: 0,
				max: 0,
				boost: 1
			},
			r3: {
				name: 'Resource 3',
				own: 0,
				eff: 15,
				cost: 250,
				slug: 'auto',
				add: 0,
				max: 0,
				boost: 1
			}
		},
		meta: {
			name: 'Spacebar'
		}
	}
	let active = false
	let running = false
	$: game = { ...clicker }

	let sb = false
</script>

<ClickerGrid>
	<svelte:fragment slot="menu">
		<Game1Aside bind:sb />
	</svelte:fragment>
	<ImageLayer hide={running} blur gray src="./img/adult/gifa4.jpg" />
	<ImageLayer hide={!running} src="./img/adult/gifa4.gif" />

	<Layer body>
		
		<GameHeader bind:game />
		<G1Btn bind:game bind:running bind:active />
		<div class="flex items-center justify-between p-4 gap-4">
			{#each Object.entries(game.upgrades) as [key, { name, own, eff, cost }] (key)}
				<div class="flex flex-col bg-white p-2 rounded bg-opacity-75">
					<divn class="flex items-center justify-between gap-2 text-lg">
						<span class="font-light text-sm">{name}</span>
						<span />
						<span class="font-semibold">{own}</span>
					</divn>
					<divn class="flex items-center justify-between gap-2 text-blue-600">
						<span>+</span>
						<span
							>{eff}
							<small>&euro; /{key === 'r1' ? 'click' : 'sec'}</small></span>
					</divn>
					<divn class="flex items-center justify-between gap-2 text-red-600">
						<span>-</span>
						<span>{cost} <span>&euro;</span></span>
					</divn>
				</div>
			{/each}
		</div>
	</Layer>
	<G1SideBar bind:sb>
		<header class="px-4 py-2 text-xl"><span>SpaceBar</span></header>
		<hr />
		<div class="flex flex-col gap-2 p-2">
			{#each [game.total, game.ticker.click, game.ticker.auto] as y}
				<div class="sf-panel">
					{@html y}
				</div>
			{/each}
		</div>
	</G1SideBar>
</ClickerGrid>

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
</style>
