console.log("Start");

function longOperation(waitms = 2000) {
  // simulate the case when the operation take a long time
  console.log("Waiting for", waitms, "milliseconds");
  let waitTill = new Date(new Date().getTime() + waitms);
  while (waitTill > new Date()) {
    // empty loop
  }
  console.log("longOperation completed");
  return waitms;
}

let result = longOperation(5000);
console.log("Result:", result);

console.log("End");