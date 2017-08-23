var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];

function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift([1], "foo");
}
function addElementToEndOfArray() {

}
function destructivelyAddElementToEndOfArray() {

}
