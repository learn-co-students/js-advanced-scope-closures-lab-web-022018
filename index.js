const produceDrivingRange = function (range) {
  return function (start, end) {
    int_start = parseInt(start);
    int_end = parseInt(end);
    let dist = Math.abs(int_end - int_start);
    let diff = Math.abs(range - dist);
    if ((range - dist) < 0) {
      return `${diff} blocks out of range`
    } else {
      return `within range by ${diff}`
    }
  }
}

const produceTipCalculator = function (percentage) {
  return function (price) {
    return price * percentage
  }
}

const createDriver = function () {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = DriverId
      DriverId++
    }
  }
}
