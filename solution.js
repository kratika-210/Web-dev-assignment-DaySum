function solve(D){
    var daysList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var ansDic = {Mon:null,Tue:null,Wed:null,Thu:null,Fri:null,Sat:null,Sun:null};

    for (var key in D){
        var date = new Date(key);
        var day = daysList[date.getDay()];
        if(ansDic[day]===null){
            ansDic[day] = D[key];
        } else {
            ansDic[day] += D[key];
        }
    }

    var dayNames = Object.keys(ansDic);
    var len = dayNames.length;

    for (var i=0;i<len;i++){
        if(ansDic[dayNames[i]]===null){
            var prevDay = (i-1+len)%len;
            while(ansDic[dayNames[prevDay]]===null){
                prevDay = (prevDay-1+len)%len;
            }
            var nextDay = (i+1)%len;
            while(ansDic[dayNames[nextDay]]===null){
                nextDay = (nextDay+1)%len;
            }
            ansDic[dayNames[i]] = Math.floor((ansDic[dayNames[prevDay]] + ansDic[dayNames[nextDay]])/2);
        }
    }

    return ansDic;
}

module.exports = solve;
