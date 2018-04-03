function produceDrivingRange(range) {
  // console.log(range)
  return function(b1, b2) {
    const distance = Math.abs(parseInt(b1)-parseInt(b2))
    // console.log(distance)
    // console.log(`1`, range)
    // console.log(`2`, b1, b2)
    if (range < distance) {
      return `${distance - range} blocks out of range`
    } else {
      return `within range by ${range - distance}`
    }
  }
}

function produceTipCalculator(percent) {
  console.log(percent)
  return function(amount) {
    console.log(amount)
    return amount * percent
  }
}

function createDriver() {
  let DriverID = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverID;
    }
  }
}
