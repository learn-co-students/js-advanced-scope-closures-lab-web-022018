let Driver =  function(name){
  let driverId = 0
    class Driver{
       constructor(name){
        this.name = name
        this.id = ++driverId
       }
    }
}

function produceDrivingRange(range){
  return function(beginning,destination){
  let beginningNum = beginning.replace(/\D/g,'')
  let endingNum = destination.replace(/\D/g,'')
  let distance = Math.abs(beginningNum - endingNum)
  if (distance > range){return `${distance - range} blocks out of range`}
  else {return `within range by ${range - distance}`}
  }

}

function produceTipCalculator(percent){
  return function(amount){
    return amount * percent
  }
}
