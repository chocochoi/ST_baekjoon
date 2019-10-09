var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var length = input[0].split(' ')[0];
var NUM = input[0].split(' ')[1];
var testNum = input[1].split(' ');
var result = new Array;

for(var i = 0; i<length; i++){
  if(parseInt(testNum[i]) < parseInt(NUM)){
    result.push(testNum[i]);
  }
}
console.log(result.join(' '))