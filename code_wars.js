function duplicateCount(text){
	var distinct = text.split("").sort();
	var prev = null;
	var count = 0;
	var answer = ""
	for(var i = 0; i < distinct.length; i++) {
		if(distinct[i] == prev || prev == null) {
			console.log("i'm here");
			count += 1;
		} if(distinct[i] != prev) {
			if(count > 1) {
				if(count === 2 && answer.length > 1) {
					answer += " and " + "'" + prev + "'" + " occurs twice";
				} else if (count === 2) {
					answer += "'" + prev + "'" + " occurs twice";
				} else if(count !== 2 && answer.length > 1) {
					answer += "and " + "'" + prev + "'" + " occurs " + count.toString() + " times";
				} else {
					answer += "'" + prev + "'" + " occurs " + count.toString() + " times";
				}
			}
			count = 1;
		}
		prev = distinct[i];
	}
	if(answer.length === 0) return "no characters repeat more than once"
	return answer;

}

console.log(duplicateCount('aasc3999'));