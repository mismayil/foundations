import {compareDefault} from '../../utils'

/**
 * Binary Search
 * 
 * Search for an element in a sorted array in O(logn) time
 * Accepts custom compare(a, b) function, defaults to builtin equality
 * Compare function should return -1 if a < b, 0 if a == b and 1 if a > b
 * 
 * @param Array (required)
 * @param Any (required)
 * @param Function (optional)
 * 
 * @return Number (index of the element or -1 if not found)
 */

export default function binarySearch(array, element, compare=compareDefault) {
  if (array.length == 0) return -1
  
  let lower = 0, upper = array.length - 1

  while (lower <= upper) {
    let middle = lower + Math.floor((upper - lower) / 2)
    let result = compare(array[middle], element)

    if (result === -1) lower = middle + 1
    else if (result === 0) return middle
    else upper = middle - 1
  }

  return -1
}