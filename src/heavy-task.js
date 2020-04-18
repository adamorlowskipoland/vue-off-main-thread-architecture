export const calculatePrimes = (iterations, multiplier) => {
  const primes = [];
  const now = Date.now();

  // Casual UI-Locking code for 2 seconds!
  // esling-disable-next-line
  while (now + 2000 >= Date.now());

  // Heavy computation!
  for (let i = 0; i < iterations; i++) {
    let candidate = i * (multiplier * Math.random());
    let isPrime = true;
    for (let c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
        // not prime
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}
