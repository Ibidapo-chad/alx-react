const { Map } = require('immutable');
const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
console.log(alpha);

const res= alpha.map((v, k) => k.toUpperCase()).join();
// 'A,B,C,D'
console.log(res)

const grades = {
    1: {
      score: 99,
      firstName: 'guillaume',
      lastName: 'salva',
    }
  };

  printBestStudents(grades);
