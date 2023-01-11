//currying

//closure

//compose

//forEach vs map

let arr = [1, 2, 3, 4, 5];

function addTwo(num) {
  return num + 2;
}

let arr2 = arr.forEach(addTwo);

console.log(arr);
