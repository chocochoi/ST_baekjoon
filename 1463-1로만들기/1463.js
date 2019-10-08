var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt');
//var input = fs.readFileSync('/dev/stdin');
input = parseInt(input);
var dp = [];
dp[1] = 0;
for(var i = 2; i<=input; i++){
	dp[i] = dp[i-1] + 1;
	if(i%2 == 0){
		dp[i] = Math.min(dp[i], dp[i/2]+1);
	}
	if(i%3 == 0){
		dp[i] = Math.min(dp[i], dp[i/3]+1);
	}
}
console.log(dp[input]);