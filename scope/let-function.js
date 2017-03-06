(() => {
  let a = () => {
    let x = 9;
    console.log(x); // 9
  }
  console.log(x); //ReferenceError: x is not defined
})();