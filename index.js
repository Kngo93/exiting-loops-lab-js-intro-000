function breakOut(array, changeValue, stopValue) {
  for (var x = 0; x < array.length; x++) {
    if (array[x] === stopValue) {
      break
    } else {
      array[x] = changeValue;
    }
  }

  return array;
}
