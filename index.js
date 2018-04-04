function produceDrivingRange(range) {
  return function(start, destination) {
    let sta = parseInt(start)
    let des = parseInt(destination)
    let diff = (Math.abs(sta-des))
    if (diff > range) {
      return (diff - range) + ' blocks out of range'
    } else {
      return 'within range by ' + (Math.abs(diff - range))
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}
