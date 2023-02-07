function userAction() {
  try {
    apiCallThatCanThrow();
  } catch (err) {
    throw new Error("New error message", { cause: err });
  }
}

try {
  userAction();
} catch (err) {
  console.log(err);
  console.log(`Cause by: ${err.cause}`);
}
