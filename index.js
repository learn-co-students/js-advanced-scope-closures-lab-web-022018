function produceDrivingRange(distance) {
  return function(beginning, destination) {
    beginning = Number(beginning.slice(0,2))
    destination = Number(destination.slice(0,2))
    let trip = Math.abs(beginning - destination)
    let output = "asd";
    (trip > distance) ? output = `${Math.abs(trip - distance)} blocks out of range` : output = `within range by ${Math.abs(trip - distance)}`
    return output
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return (fare * tip)
  }
}
