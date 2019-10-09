var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var numArray = new Array;

for(var i = 0; i<input.length; i++){
  numArray.push(input[i].split(' '));
  var sum =  parseInt(numArray[i][0])+parseInt(numArray[i][1]);
  if(!(sum === 0)){
    console.log(sum);
  }
}