<script>
	import { _settings } from '../lib/clickergame/clicker'
	import NotFound from './NotFound.svelte'
	import { onMount } from 'svelte'
	import { path } from 'elegua'
	import ClickerGrid from '../lib/clickergame/ClickerGrid.svelte'
	import FormPanel from '../lib/clickergame/FormPanel.svelte'
	import G1Btn from '../lib/clickergame/G1Btn.svelte'
	import G1SideBar from '../lib/clickergame/G1Sidebar.svelte'
	import Game1Aside from '../lib/clickergame/Game1Aside.svelte'
	import GameHeader from '../lib/clickergame/GameHeader.svelte'
	import ImageLayer from '../lib/clickergame/ImageLayer.svelte'
	import Layer from '../lib/clickergame/Layer.svelte'
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
			name: 'SpacePrison',
			titel: 'Savage Submarine Legend',
			player: '',
			set: {
				auto_save: false,
				auto_save_int: 30000,
				tick_int: 1000,
				muted: false,
				volume: 0.2
			},
			op: {
				op1: false,
				op2: false,
				op3: false,
				op4: false
			}
		}
	}
	const adapter = {
		name: {
			type: 'text',
			disabled: true
		},
		titel: {
			type: 'text',
			disabled: true
		},
		player: {
			type: 'text',
			disabled: false
		}
	}
	const nav = [
		{ titel: 'Start', href: '/' },
		{ titel: 'Game', href: '/game' },
		{ titel: 'Settings', href: '/settings' },
		{ titel: 'Not Found', href: '/notfound' }
	]
	let active = false
	let running = false
	$: game = { ...clicker }

	onMount(() => {
		$path = '/'
	})

	let sb = false
</script>

<ClickerGrid>
	<svelte:fragment slot="menu">
		<Game1Aside bind:sb />
	</svelte:fragment>
	{#if $path === '/'}
		<ImageLayer src="./img/game/d02.png" />
		<Layer>
			<FormPanel>
				{#if game.meta}
					{#each Object.entries(game.meta) as [key, val] (key)}
						{#if typeof val === 'string' || typeof val === 'number'}
							<div>
								<label for="f-{key}" class="capitalize">{key}</label>
								<input
									value={val}
									class="form-control"
									type={adapter[key].type}
									disabled={adapter[key].disabled}
									name="f-{key}"
									id="f-{key}" />
							</div>
						{/if}
					{/each}
				{/if}
				<nav class="grid gap-2 pt-4">
					{#each nav as { titel, href }}
						{#if $path !== href}
							<a {href} class="btn">{titel}</a>
						{/if}
					{/each}
				</nav>
			</FormPanel>
		</Layer>
	{:else if $path === '/game'}
		<ImageLayer hide={running} blur gray src="./img/game/gifa4.jpg" />
		<ImageLayer hide={!running} src="./img/game/gifa4.gif" />
		<ImageLayer contain hide={!running} src="./img/game/gsf1.png" />
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
	{:else if $path === '/settings'}
		<ImageLayer src="./img/game/d01.png" />
		<Layer>
			<FormPanel>
				{#if $_settings}
					{#if $_settings.set}
						{#each Object.entries($_settings.set) as [key, val] (key)}
							{#if typeof val === 'number'}
								<div class="flex flex-col gap-1">
									<label for="ss-{key}" class="capitalize">{key}</label>
									<input
										value={val}
										class="form-control"
										type="number"
										min={key === 'volume' ? 0 : 1000}
										max={key === 'volume' ? 1 : 60000}
										step={key === 'volume' ? 0.1 : 1000}
										name="ss-{key}"
										id="ss-{key}" />
								</div>
							{:else if typeof val === 'boolean'}
								<div class="flex items-center justify-between">
									<label for="ss-{key}" class="capitalize">{key}</label>
									<input
										checked={val}
										class="h-5 w-5"
										type="checkbox"
										name="ss-{key}"
										id="ss-{key}" />
								</div>
							{/if}
						{/each}


					{/if}

					<!-- 	{#each Object.entries($_settings) as [key, val] (key)}
						{#if typeof val === 'string' || typeof val === 'number'}
							<div>
								<label for="f-{key}" class="capitalize">{key}</label>
								<input
									value={val}
									class="form-control"
									type={adapter[key].type}
									disabled={adapter[key].disabled}
									name="f-{key}"
									id="f-{key}" />
							</div>
						{/if}
					{/each} -->
				{/if}

				<nav class="grid gap-2 pt-4">
					{#each nav as { titel, href }}
						{#if $path !== href}
							<a {href} class="btn">{titel}</a>
						{/if}
					{/each}
				</nav>
			</FormPanel>
		</Layer>
	{:else}
		<NotFound />
	{/if}

	<G1SideBar bind:sb let:close>
		<header class="px-4 py-2 text-xl"><span>{game.meta.name}</span></header>
		<hr />
		<div class="flex flex-col divide-y">
			{#each nav as { titel, href }}
				<a {href} class="flex items-center px-4 py-2" on:mouseup={close}>
					<span
						class="text-xl font-semibold"
						class:text-gray-400={$path === href}>{titel}</span>
				</a>
			{/each}
			<!-- {#each [game.total, game.ticker.click, game.ticker.auto] as y}
				<div class="sf-panel">
					{@html y}
				</div>
			{/each} -->
		</div>
	</G1SideBar>
</ClickerGrid>

<style>
</style>
