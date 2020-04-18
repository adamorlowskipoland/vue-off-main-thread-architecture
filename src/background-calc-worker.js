import { calculatePrimes } from "./heavy-task";

const calculations = {
  calculatePrimes,
};

addEventListener("message", (event) => {
  postMessage({ key: "working", value: true });
  if (Object.keys(calculations).includes(event.data.method)) {
    postMessage({
      key: "nums",
      value: calculations.calculatePrimes(...event.data.args),
    });
  } else {
    postMessage({
      key: "error",
      value: `No calculation found ${event.data.method ? `for type ${event.data.method}` : ''}`,
    });
  }
  postMessage({ key: "working", value: false });
});

