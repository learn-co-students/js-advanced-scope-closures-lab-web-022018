function produceDrivingRange(blockRange){
  return function(startBlock, finishBlock){
    let start = parseInt(startBlock)
    let finish = parseInt(finishBlock)
    let distance = Math.abs(finish - start)
    let range = blockRange - distance
    if (range > 0) {
      return `within range by ${range}`
      }
    else {
      return `${Math.abs(range)} blocks out of range`
      }
    }
  }

function produceTipCalculator(tip){
  return function(fare){
    return tip * fare
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
