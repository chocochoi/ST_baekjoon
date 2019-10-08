var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var length = parseInt(input.shift());
var dp = [];

dp[0] = 0;
dp[1] = parseInt(input[0]);
dp[2] = parseInt(input[0])+parseInt(input[1]);
for(var i=3; i<=length; i++){
	dp[i] = Math.max(dp[i-3]+parseInt(input[i-2])+parseInt(input[i-1]),dp[i-2]+parseInt(input[i-1]));
}

console.log(dp[length]);