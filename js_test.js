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

function createMyObject(){
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    },
  };
}

console.log(createMyObject());

function updateObject(obj){
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName}` + ' ' + `${this.lastName}`;
    }
  };
  return person;
}


const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}