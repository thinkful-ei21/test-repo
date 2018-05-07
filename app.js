'use strict';

function yearOfBirth (age){
  return 2018 - age;
}

function whoAmI (name, age) {  
  console.log (`Hi, my name is ${name} and I\'m ${age} years old`);
  console.log (`I was born in ${yearOfBirth(age)}.`);
}

whoAmI('Alex', 31);