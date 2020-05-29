var subject = [20,30,40,50,60]
var totalsum=0;
for (var i in subject)
{
    totalsum += subject[i];
}

var numcnt = subject.length;
var average = totalsum/numcnt;
console.log(average);
