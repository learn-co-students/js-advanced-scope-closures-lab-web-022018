function produceDrivingRange(blockRange) {
  return function(one, two) {
    return (Math.abs(parseInt(one)-parseInt(two)) > blockRange) ?
    `${Math.abs(parseInt(one)-parseInt(two))-blockRange} blocks out of range`
    : `within range by ${blockRange - Math.abs(parseInt(one)-parseInt(two))}`
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}
