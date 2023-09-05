<script>
	// import { path, resolve, params, match } from 'elegua'
	import { addToast } from './notes'
	import { onDestroy, onMount } from 'svelte'
	import ActionBar, { openAction } from './components/ActionBar.svelte'
	import ClickerDialog, { openDialog } from './components/ClickerDialog.svelte'
	import ClickerDisplay from './components/ClickerDisplay.svelte'
	import ClickerNavBar from './components/ClickerNavBar.svelte'
	import ClickerUpgItem from './components/ClickerUpgItem.svelte'
	import ClickerUpgPanel from './components/ClickerUpgPanel.svelte'
	import SvgBg from './components/SvgBg.svelte'
	import Spacebar from './components/Spacebar.svelte'
	import {
		_store,
		currancy,
		addkomma,
		formatter,
		time,
		elapsed,
		timeformatter
	} from './clicker'
	let intV1, intV2, c1
	let active = false
	let disabled = false

	let initData = {
		money: 0,
		clickInc: 1,
		autoInc: 0,
		upg: {
			bas: {
				name: 'Resource 1',
				own: 0,
				eff: 1,
				add: 1,
				cost: 15,
				max: 0,
				boost: 1
			},
			cat: {
				name: 'Resource 2',
				own: 0,
				eff: 1,
				add: 1,
				cost: 25,
				max: 0,
				boost: 1
			},
			wok: {
				name: 'Resource 3',
				own: 0,
				eff: 15,
				add: 15,
				cost: 250,
				max: 0,
				boost: 1
			}
		}
	}

	$: ({ money, clickInc, autoInc, upg } = initData)
	const saveGame = () => {
		let nv = { upg: { ...upg }, money, clickInc, autoInc }
		// console.log('Game Saved', nv)
		_store.set(nv)
	}
	const loadGame = () => {
		let lv = {
			money: $_store.money,
			clickInc: $_store.clickInc,
			autoInc: $_store.autoInc
		}
		money = $_store.money
		clickInc = $_store.clickInc
		autoInc = $_store.autoInc
		upg = { ...$_store.upg }
		console.log('Game Loaded', lv)
	}
	const resetGame = () => {
		clear()
		setTimeout(() => {
			upg = { ...initData.upg }
			money = initData.money
			clickInc = initData.clickInc
			autoInc = initData.autoInc
			tick()
		}, 50)
	}
	const upgrade = (event) => {
		let name = event.detail

		if (name == 'cat') {
			if (money >= upg.cat.cost && upg.cat.own < 50) {
				if (upg.cat.own <= 13) {
					// autoInc += upg.cat.add
					autoInc += upg.cat.boost * upg.cat.add
					upg.cat.add++
					upg.cat.boost = 1
				} else if (upg.cat.own == 14) {
					// autoInc += upg.cat.add
					autoInc += upg.cat.boost * upg.cat.add
					upg.cat.add++
					upg.cat.boost = 200
				} else if (upg.cat.own <= 23) {
					autoInc += 200 * upg.cat.add
					upg.cat.add++
					upg.cat.boost = 200
				} else if (upg.cat.own == 24) {
					autoInc += 200 * upg.cat.add
					upg.cat.add++
					upg.cat.boost = 5000
				} else if (upg.cat.own <= 48) {
					autoInc += 5000 * upg.cat.add
					upg.cat.add++
					upg.cat.boost = 5000
				} else if (upg.cat.own == 49) {
					autoInc += 5000 * upg.cat.add
					upg.cat.add++
					upg.cat.boost = 15000
				} else {
					autoInc += 15000 * upg.cat.add
					upg.cat.add++
					upg.cat.boost = 15000
				}
				upg.cat.own += 1
				money -= upg.cat.cost
				upg.cat.cost = upg.cat.cost * 2
				upg.cat.eff = upg.cat.boost * upg.cat.add
				addToast({
					message: `Update ${upg.cat.name} Ok!`,
					type: 'success',
					timeout: 3000
				})
				//   document.getElementById("upg.cat.").innerHTML =
				//     upg.cat.own + "-clicker upg.cat.: " + addcomma(upg.cat.cost) + " | +" + addcomma(upg.cat.add * upg.cat.boost) + "/sec";
			} else if (upg.cat.own == 50) {
				//   document.getElementById("upg.cat.").innerHTML =
				//     upg.cat.own + "-clicker upg.cat.: MAX | +15% click/sec";
				addToast({
					message: `Maximum erreicht! ${upg.cat.name}`,
					type: 'error',
					timeout: 3000
				})
			} else {
				addToast({
					message: `Nicht genug Geld! ${upg.cat.name}`,
					type: 'error',
					timeout: 3000
				})
			}
		}

		if (name == 'wok') {
			if (money >= upg.wok.cost && upg.wok.own < 50) {
				if (upg.wok.own <= 13) {
					autoInc += upg.wok.add * upg.wok.boost
					upg.wok.add++
					upg.wok.boost = 1
				} else if (upg.wok.own == 14) {
					autoInc += upg.wok.add * upg.wok.boost
					upg.wok.add++
					upg.wok.boost = 200
				} else if (upg.wok.own <= 23) {
					autoInc += upg.wok.boost * upg.wok.add
					upg.wok.add++
					upg.wok.boost = 200
				} else if (upg.wok.own == 24) {
					autoInc += upg.wok.boost * upg.wok.add
					upg.wok.add++
					upg.wok.boost = 5000
				} else if (upg.wok.own <= 48) {
					autoInc += upg.wok.boost * upg.wok.add
					upg.wok.add++
					upg.wok.boost = 5000
				} else if (upg.wok.own == 49) {
					autoInc += upg.wok.boost * upg.wok.add
					upg.wok.add++
					upg.wok.boost = 15000
				} else {
					autoInc += upg.wok.boost * upg.wok.add
					upg.wok.add++
					upg.wok.boost = 15000
				}
				upg.wok.own += 1
				money -= upg.wok.cost
				upg.wok.cost = upg.wok.cost * 3
				upg.wok.eff = upg.wok.boost * upg.wok.add
				addToast({
					message: `Update ${upg.wok.name} Ok!`,
					type: 'success',
					timeout: 3000
				})
				//   document.getElementById("upg.wok.").innerHTML =
				//     upg.wok.own + "-upg.wok.: " + addcomma(upg.wok.cost) + " | +" + addcomma(upg.wok.add * upg.wok.boost) + "/sec";
			} else if (upg.wok.own == 50) {
				addToast({
					message: `Maximum erreicht! ${upg.wok.name}`,
					type: 'error',
					timeout: 3000
				})
			} else {
				addToast({
					message: `Nicht genug Geld! ${upg.wok.name}`,
					type: 'error',
					timeout: 3000
				})
			}
		}

		if (name == 'bas') {
			if (money >= upg.bas.cost) {
				clickInc += upg.bas.cost / 15
				money -= upg.bas.cost
				upg.bas.own += 1
				upg.bas.cost = upg.bas.cost * 5
				upg.bas.add = upg.bas.cost / 15
				addToast({
					message: `Update ${upg.bas.name} Ok!`,
					type: 'success',
					timeout: 3000
				})
				//   document.getElementById("upgrade").innerHTML =
				//     addcomma(upg.bas.own) + "-main upgrade: " + addcomma(upg.bas.cost);
				if (upg.cat.own == 50) {
					autoInc -= upg.cat.max
					upg.cat.max = Math.floor(clickInc * 0.15)
					autoInc += upg.cat.max
				}
				if (upg.wok.own == 50) {
					autoInc -= upg.wok.max
					upg.wok.max = Math.floor(clickInc * 0.35)
					autoInc += upg.wok.max
				}
			} else {
				addToast({
					message: `Nicht genug Geld! ${upg.bas.name}`,
					type: 'error',
					timeout: 3000
				})
			}
		}
	}

	const handleClick = (event) => {
		money += clickInc
		event.target.blur()
	}
	const handleKeydown = (event) => {
		let key = event.key
		let keyCode = event.keyCode
		if (keyCode === 32) {
			active = true
			// handleClick()
		}
	}
	const handleKeyUp = (event) => {
		active = false
		handleClick(event)
	}
	const tickFunc1 = () => {
		money = money + autoInc
	}
	const tickFunc2 = () => {
		saveGame()
		c1++
		console.log('game saved', c1, $_store)
	}
	const tick = () => {
		intV1 = setInterval(tickFunc1, 1000)
		intV2 = setInterval(tickFunc2, 30000)
	}
	const clear = () => {
		clearInterval(intV1)
		clearInterval(intV2)
	}
	onMount(() => {
		c1 = 0
		loadGame()
		tick()
	})

	onDestroy(() => {
		saveGame()
		clearInterval(intV1)
		clearInterval(intV2)
	})
</script>

<SvgBg editor={false} />

<section class="layer">
	<ClickerDisplay
		v1={formatter.format($time)}
		v2={timeformatter($elapsed)}
		v3={currancy(money)}
		v4={addkomma(clickInc)}
		v5={addkomma(autoInc)} />

	<Spacebar bind:active bind:disabled {handleClick} />

	<div class="text-center">
		<div class="inline-grid grid-cols-3 gap-4 p-4">
			{#each Object.entries(upg) as [slug, item] (slug)}
				<ClickerUpgItem
					{...item}
					{slug}
					{money}
					on:open={() => openDialog('Upgrades')} />
			{/each}
		</div>
	</div>
	<ClickerNavBar
		on:option={(e) => openAction(e.detail)}
		on:upgrade={(e) => openDialog(e.detail)} />

</section>

<ActionBar let:payload let:close>
	<div class="flex flex-col gap-1 p-1 bg-white bg-opacity-50 rounded-t">
		<div class="bg-gray-50 p-2 rounded-t text-center">
			<span class="text-xl font-semibold">{payload}</span>
		</div>
		<button
			on:click={resetGame}
			on:mouseup={close}
			class="btn bg-red-50 hover:bg-red-100 text-red-600">Reset</button>
		<button
			on:click={loadGame}
			on:mouseup={close}
			class="btn bg-blue-50 hover:bg-blue-100 text-blue-600">Load</button>
		<button
			on:click={saveGame}
			on:mouseup={close}
			class="btn bg-blue-50 hover:bg-blue-100 text-blue-600">Save</button>
		<button
			on:click={close}
			class="btn bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-white hover:border-gray-600"
			>Cancel</button>
	</div>
</ActionBar>

<ClickerDialog let:payload let:close>
	<div class="gap-4 grid grid-cols-1 lg:grid-cols-3 p-4">
		{#each Object.entries(upg) as [slug, item] (slug)}
			<ClickerUpgPanel
				v1={item.name}
				v2={item.own}
				v3={currancy(item.eff)}
				v4={currancy(item.cost)}
				disabled={item.cost > money}
				{slug}
				on:clicked={upgrade} />
		{/each}
	</div>
</ClickerDialog>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyUp} />
