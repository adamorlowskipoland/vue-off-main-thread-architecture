import { calculatePrimes } from "./heavy-task";

addEventListener("message", (event) => {
  console.log('%c background-calc-worker.js, 17, event, , ', 'color: lightseagreen; font-weight:' +
    ' 700', event);
  if (event.data.method === "calculatePrimes") {
    postMessage({ key: 'loading', value: true });
    postMessage({ key: 'nums', value: calculatePrimes(...event.data.args) });
    postMessage({ key: 'loading', value: false });
  } else {
    postMessage({ msg: "elo" });
  }
})
