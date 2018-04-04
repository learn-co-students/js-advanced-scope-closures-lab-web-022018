function produceDrivingRange(blocks){
  // console.log(blocks)
  return function(aBlock,bBlock){
    let distance = Math.abs(parseInt(aBlock)-parseInt(bBlock))
    let inRange = blocks - distance
    if (inRange > 0){
      return `within range by ${inRange}`
    } else {
      return `${Math.abs(inRange)} blocks out of range`}}}

function produceTipCalculator(percentage){
  return function(fare){
    return fare*percentage}}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name}}}
