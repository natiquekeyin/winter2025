const addPeriod = (str) => {
  return `${str}.`;
};

const actual = addPeriod("Hello");
const expected = "Hello.";

if (expected !== actual) {
  console.log("TEST FAILED");
} else {
  console.log("TEST PASSED!!");
}
