var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];

function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("element")
  return array
}
function addElementToEndOfArray() {

}
function destructivelyAddElementToEndOfArray() {

}
