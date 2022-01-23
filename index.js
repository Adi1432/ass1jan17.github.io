function HigherOderFunc(array, callback) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var x = callback(array[i]);
    result.push(x);
  }
  return result;
}
function mul4(n) {
  return n * 4;
}
function add9(n) {
  return n + 9;
}
var output1 = HigherOderFunc([12, 1, 4, 3, 10], mul4);
var output2 = HigherOderFunc([12, 1, 4, 3, 10], add9);
document.write(output1);
document.write("<br/>");
document.write(output2);
