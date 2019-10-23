'use strict';
let jon = "hey, how's it going?"

console.log(jon);

console.log(jon.charAt(5));

//asdfasdfasdfasdfasdf

const dogs = ['golden retriever', 'husky'];
const cats = ['bengal', 'persian', 'siamese'];

const animals = [...dogs, 'squirrel', ...cats, 'coyote', 'fox'];
console.log(animals.length);

function getVolume(...dimensions){
  return dimensions[0] * dimensions[1] * dimensions[2] * dimensions[3];
}

console.log(getVolume(5, 10, 3, 50));
