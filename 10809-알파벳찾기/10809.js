var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var length = input.length;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var result = new Array;
var index = 0;

for(var i=0;i<26;i++){
  for(var j=0;j<length;j++){
    if(alphabet[i] === input[j]){
      index = j;
      break;
    }else{
      index = -1;
    }
  }
  result.push(index);
  index = 0;
}
console.log(result.join(' '));