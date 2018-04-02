function produceDrivingRange(distance){
  return function(start, end){
    let dumbArgument = start.split("th")[0]
    let stupidArgument = end.split("th")[0]
    let location = stupidArgument > dumbArgument ? stupidArgument - dumbArgument : dumbArgument - stupidArgument;
    if (distance > location){
      return ("within range by " + (distance - location))
    }
    else {
      return ((location - distance) + " blocks out of range")
    }
  }
}

function produceTipCalculator(percentage){
  return function(bill){
    return bill * percentage
  }
}
