var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var numArray = new Array;

for(var i = 0; i<input.length; i++){
  numArray.push(input[i].split(' '));
}

console.log(numArray);