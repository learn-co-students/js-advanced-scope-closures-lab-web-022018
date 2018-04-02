function produceDrivingRange(range){
  return function(n1,n2) {
    var blocks = Number(n2.replace('th','')) - Number(n1.replace('th',''))
    if(blocks > range) {
      var out = blocks - range
      return out + ' blocks out of range'
    } else {
      return 'within range by ' + blocks
    }
  }
}

function produceTipCalculator(p) {
  return function(v){
    return v * p

  }
}
