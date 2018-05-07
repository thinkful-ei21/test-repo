'use strict';

function yearOfBirth (age){
  return 2018 - age;
}


function whoAmI (name, age) {
  try {
    if (age < 0) {
      throw new Error();
    }
  console.log (`Hi, my name is ${name} and I\'m ${age} years old`);
  console.log (`I was born in ${yearOfBirth(age)}.`);
  }

  catch(e) {
    console.error('Age cannot be a negative number.');
  }
}

whoAmI('Alex', -20);