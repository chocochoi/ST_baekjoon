var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString();
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var result = "";

for(var i=1;i<=parseInt(input);i++){
  result += '*';
  console.log(result);
}