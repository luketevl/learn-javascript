function setTimeoutAsync(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

// Waits for timeout - no error thrown
await setTimeoutAsync(3000);
