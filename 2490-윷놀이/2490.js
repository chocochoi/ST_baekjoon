var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var length = input.length;
var inputArray = new Array;
var front = 0;
//var back = 0;

for(var i=0;i<length;i++){
  inputArray = input[i].split(' ');
  for(var j=0;j<4;j++){
    if(inputArray[j] == 0){
      front++;
    }else{
      //back++;
    }
  }
  if(front == 0){
    console.log('E');
  }else if(front ==1){
    console.log('A');
  }else if(front ==2){
    console.log('B');
  }else if(front ==3){
    console.log('C');
  }else if(front ==4){
    console.log('D');
  }
  inputArray = [];
  front = 0;
  //back = 0;
}