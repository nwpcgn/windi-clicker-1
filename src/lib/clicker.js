import { writable, readable, derived } from "svelte/store";
import storage from "./util/storage";

const toggleable = (initial) => {
  const store = writable(initial);

  return {
    ...store,
    toggle: () => store.update((n) => !n),
  };
};

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start = Date.now();
export const elapsed = derived(time, ($time) =>
  Math.round(($time - start) / 1000)
);

export const modal = toggleable(false);
export const _store = storage("nwp_store", {});
const opFormat = { style: "currency", currency: "EUR" };
const currancy = (price) => Intl.NumberFormat("de-DE", opFormat).format(price);
const addkomma = (int = 0) => int.toLocaleString();
const formatter = new Intl.DateTimeFormat("en", {
  hour12: false,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

const timeformatter = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

export { currancy, addkomma, formatter, timeformatter };
