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

//***OBJECTS***
const myFamily = {
  lastName: 'Doe',
  mom: 'Cynthia',
  dad: 'Paul',
};

myFamily.sister = 'Lucinda';
myFamily['brother'] = 'Merle';
myFamily['uncle'] = 'Allan';
myFamily.sayHi = function() {
  console.log(`Hello from the ${myFamily.lastName}s`);
}
myFamily.sayHi() // => Hello from the Does

console.log(myFamily);
