var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var numArray = new Array;

for(var i = 0; i<parseInt(input.length)-1; i++){
  numArray.push(input[i].split(' '));
  if(0 < parseInt(numArray[i][0]) && parseInt(numArray[i][1]) < 10){
    console.log(parseInt(numArray[i][0])+parseInt(numArray[i][1]));
  }
}