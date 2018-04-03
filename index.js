
function produceDrivingRange(limit){
	return function (start, finish) {
		distance = parseInt(finish.slice(0,-2)) - parseInt(start.slice(0,-2))
		if (distance > limit){
			return `${(distance - limit)} blocks out of range`
		}else{
			return `within range by ${(limit - distance)}`
		}
	}
}


function produceTipCalculator(percent){
	return function (bill) {
		return bill * percent
	}
}
