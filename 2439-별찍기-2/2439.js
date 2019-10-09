var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString();
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
input = parseInt(input);
var result = new Array;

for(var j=0;j<input;j++){
  result[j] = ' ';
}
for(var i=input-1;i>=0;i--){
  result[i] = "*";
  console.log(result.join(''));
}