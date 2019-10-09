var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var result = 0;

for(var i=0;i<input.length;i++){
  if(input[i]=='A' || input[i]=='B' || input[i]=='C'){
    result += 3;
  }else if(input[i]=='D' || input[i]=='E' || input[i]=='F'){
    result += 4;
  }else if(input[i]=='G' || input[i]=='H' || input[i]=='I'){
    result += 5;
  }else if(input[i]=='J' || input[i]=='K' || input[i]=='L'){
    result += 6;
  }else if(input[i]=='M' || input[i]=='N' || input[i]=='O'){
    result += 7;
  }else if(input[i]=='P' || input[i]=='Q' || input[i]=='R' || input[i]=='S'){
    result += 8;
  }else if(input[i]=='T' || input[i]=='U' || input[i]=='V'){
    result += 9;
  }else if(input[i]=='X' || input[i]=='W' || input[i]=='Y' || input[i]=='Z'){
    result += 10;
  }
}
console.log(result);