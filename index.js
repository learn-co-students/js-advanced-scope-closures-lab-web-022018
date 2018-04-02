function produceDrivingRange(range){
  range = parseInt(range)

  return function(start_range, end_range){
      start_range = parseInt(start_range)
  end_range = parseInt(end_range)
    if (Math.abs(start_range-end_range) < range){
        return `within range by ${Math.abs(range - Math.abs(start_range-end_range))}`
    }else {
        return `${Math.abs(range-Math.abs(start_range-end_range))} blocks out of range`
    }
  }
}

function produceTipCalculator(multiplier){
  return function(baserate){
    return multiplier * baserate
  }
}
function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}