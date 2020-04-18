import { calculatePrimes } from "./heavy-task";

addEventListener("message", (event) => {
  console.log('%c background-calc-worker.js, 17, event, , ', 'color: lightseagreen; font-weight:' +
    ' 700', event);
  if (event.data.method === "calculatePrimes") {
    postMessage({ nums: calculatePrimes(...event.data.args) });
  } else {
    postMessage({ msg: "elo" });
  }
})
