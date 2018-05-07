'use strict';


function whoAmI(name, age) {
  var yearOfBirth = 2018 - age;  
  console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
  console.log(`I was born in ${yearOfBirth}.`);
}

whoAmI('Alex', 31);