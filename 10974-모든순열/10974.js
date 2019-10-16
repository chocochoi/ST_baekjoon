var fs = require('fs');
var input = fs.readFileSync('/Users/chiyeon/ST_BAEKJOON/test.txt').toString();
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
input = parseInt(input);

var a = [1, 2, 3];
function permu(a) {
  return a.reduce(
    function(list, element) {
      var newlist = [];

      list.forEach(function(seq) {
        for (var i = seq.length; i >= 0; i--) {
          var newseq = [].concat(seq);
          newseq.splice(i, 0, element);
          newlist.push(newseq);
        }
      });
      console.log(newlist.join())
      return newlist;
    },
    [[]]
  );
}

permu(a);
