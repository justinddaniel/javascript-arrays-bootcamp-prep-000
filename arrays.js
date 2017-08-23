var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];

function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  const array = [1];
  return array.unshift("foo");
}
function addElementToEndOfArray() {

}
function destructivelyAddElementToEndOfArray() {

}
