var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 [element, ...array]
 return `${element} + ${array}`
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}