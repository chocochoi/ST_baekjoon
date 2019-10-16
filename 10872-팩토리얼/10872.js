var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString();
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var num = parseInt(input);
var result = 1;
for(var i=0;i<num;i++){
  result += result*i;
}
console.log(result);