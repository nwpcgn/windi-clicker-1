// import { writable, readable, derived } from "svelte/store";
import storage from "../util/storage";

export const _store = storage("nwp_clicker", {
  total: 0,
  ticker: {
    auto: 0,
    click: 1,
  },
  upgrades: {
    r1: {
      name: "Resource 1",
      own: 0,
      eff: 1,
      cost: 15,
      slug: "click",
      add: 0,
      max: 0,
      boost: 1,
    },
    r2: {
      name: "Resource 2",
      own: 0,
      eff: 1,
      cost: 25,
      slug: "auto",
      add: 0,
      max: 0,
      boost: 1,
    },
    r3: {
      name: "Resource 3",
      own: 0,
      eff: 15,
      cost: 250,
      slug: "auto",
      add: 0,
      max: 0,
      boost: 1,
    },
  },
  meta: {
    name: "SpacePrison",
    titel: "Savage Submarine Legend",
    player: "",
    set: {
      auto_save: false,
      auto_save_int: 30000,
      tick_int: 1000,
      muted: false,
      volume: 0.2,
    },
    op: {
      op1: false,
      op2: false,
      op3: false,
      op4: false,
    },
  },
});
export const _settings = storage("nwp_clicker_settings", {
  name: "SpacePrison",
  titel: "Savage Submarine Legend",
  player: "",
  set: {
    auto_save: false,
    auto_save_int: 30000,
    tick_int: 1000,
    muted: false,
    volume: 0.2,
  },
  op: {
    op1: false,
    op2: false,
    op3: false,
    op4: false,
  },
});
const addkomma = (int = 0) => int.toLocaleString();
const getRandInt = (min, max) => Math.random() * (max - min) + min;
const clickOutside = (node) => {
  const handleClick = (event) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", node));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
};
const sleep = (delay = 1000) =>
  new Promise((resolve) => setTimeout(resolve, delay));
export { addkomma, getRandInt, clickOutside, sleep };
