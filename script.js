const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  var result = [];
  var temp = [];
  var sum = 0;

  arr.forEach(item => {
    if (sum + item > n) {
      result.push(temp);
      temp = [item];
      sum = item;
    } else {
      temp.push(item);
      sum += item;
    }
  });

  if (temp.length !== 0) {
    result.push(temp);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));