let obj = {
  a: 'a',
  b: 'b'
}

let obj2 = obj;

// obj2.a = 'aa';
obj2 = {
  ...obj,
  a: 'aaa'
}

console.log('obj', obj)
console.log('obj2', obj2)
