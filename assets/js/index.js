'use strict';
const checkName = (str) => {
  const reg = new RegExp('^[A-Z][a-z]* [A-Z][a-z]*$');
  console.log(str);

  return reg.test(str) ? 'success' : 'error';
};
console.log(checkName('Test Testovich'));
console.log(checkName('Test '));
console.log(checkName('Testovich'));
console.log(checkName('test Testovich'));
console.log(checkName('testovich'));
console.log(checkName('s Testovich'));
console.log(checkName('Test Testovich asd'));
console.log(checkName('Test Testovich Asd'));
console.log(checkName('Test Testovich'));
