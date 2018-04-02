function produceDrivingRange(range) {
  return function (start, end) {
    let distance = Math.abs(end.slice(0,2) - start.slice(0,2))
    if (distance < range) {
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
}


function produceTipCalculator(percentage) {
  return function (total) {
    return total*percentage
  }
}
