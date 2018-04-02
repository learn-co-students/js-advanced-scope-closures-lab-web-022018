function produceDrivingRange(max){
  return function(first, second){
    diff = max - Math.abs(parseInt(first.slice(0, -2)) - parseInt(second.slice(0, -2)));
    return diff > 0 ? `within range by ${diff}` : `${-diff} blocks out of range`;
  };
}

function produceTipCalculator(percentage){
  return fare => fare * percentage;
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = driverId++;
    }
  }
}

const Driver = createDriver(name);
