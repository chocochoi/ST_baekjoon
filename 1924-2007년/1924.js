var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString().split(' ');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);
var month = [31,28,31,30,31,30,31,31,30,31,30,31];
var sumMonth = 0;
var sumDay = 0;
var result = 0;

if(num1==1){
  sumMonth = 0;
}else{
  for(var i=0;i<num1-1;i++){
    sumMonth += month[i];
  }
}
sumDay = sumMonth + num2;
result = sumDay%7;
if(result==1){
  console.log('MON');
}else if(result==2){
  console.log('TUE')
}else if(result==3){
  console.log('WED')
}else if(result==4){
  console.log('THU')
}else if(result==5){
  console.log('FRI')
}else if(result==6){
  console.log('SAT')
}else{
  console.log('SUN')
}
sumMonth = 0;
sumDay =0;
result =0;