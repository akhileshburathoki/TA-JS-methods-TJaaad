let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((person) => {
  return person.name;
});
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => {
  return person.grade;
});
// Create an array peopleSex and store the value of sex key from persons array
let peopelsex = persons.map((person) => {
  return person.sex;
});
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName = persons.filter((person) => {
  if (person.name.startsWith(`J`) || person.name.startsWith(`P`)) {
    return true;
  } else {
    return false;
  }
});
console.log(filterName);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

// Log all the filtered male ('M') in persons array
let maleArray = persons.filter((person) => {
  if (person.sex === `M`) {
    return true;
  } else {
    return false;
  }
});
console.log(maleArray);
// Log all the filtered female ('F') in persons array
let femaleArray = persons.filter((person) => {
  if (person.sex === `F`) {
    return true;
  } else {
    return false;
  }
});
console.log(femaleArray);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let femaleArr = persons.filter((person) => {
  if (
    (person.name.startsWith(`C`) || person.name.startsWith(`J`)) &&
    person.sex === `F`
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(femaleArr);
// Log all the even numbers from peopleGrade array
console.log(
  persons.filter((person) => {
    if (person.grade % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
);
// Find the first name that starts with 'J' in persons array and log the object
let nameJ = persons
  .filter((person) => {
    if (person.name.startsWith(`J`)) {
      return true;
    }
    return false;
  })
  .shift();
console.log(nameJ);
// Find the first name that starts with 'P' in persons array and log the object
let nameP = persons
  .filter((person) => {
    if (person.name.startsWith(`P`)) {
      return true;
    }
    return false;
  })
  .shift();
console.log(nameP);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let Arr = persons.filter((person) => {
  if (person.name.startsWith(`J`) && person.grade > 10 && person.sex === `F`) {
    return true;
  } else {
    return false;
  }
});
console.log(Arr);
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => {
  if (person.sex === `F`) {
    return true;
  } else {
    return false;
  }
});
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => {
  if (person.sex === `M`) {
    return true;
  } else {
    return false;
  }
});
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, person) => {
  return acc + person.grade;
}, 0);
// Find the average grade
let gradeAverage =
  persons.reduce((acc, person) => {
    return acc + person.grade;
  }, 0) / persons.length;
// Find the average grade of male
let maleGradeAverage =
  persons
    .filter((person) => {
      if (person.sex === `M`) {
        return true;
      }
      return false;
    })
    .reduce((a, b) => {
      return a + b.grade;
    }, 0) / persons.length;
// Find the average grade of female
let femaleGradeAverage =
  persons
    .filter((person) => {
      if (person.sex === `F`) {
        return true;
      }
      return false;
    })
    .reduce((a, b) => {
      return a + b.grade;
    }, 0) / persons.length;

// Find the highest grade

let higestGrade = persons
  .sort((a, b) => {
    return a.grade - b.grade;
  })
  .pop();
// Find the highest grade in male
let maleHighestGrade = persons
  .filter((person) => {
    if (person.sex === `M`) {
      return true;
    }
    return false;
  })
  .sort((a, b) => a.grade - b.grade)
  .pop();
// Find the highest grade in female
let femaleHighestGrade = persons
  .filter((person) => {
    if (person.sex === `F`) {
      return true;
    }
    return false;
  })
  .sort((a, b) => a.grade - b.grade)
  .pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let higestGradeJP = persons
  .filter((person) => {
    if (person.name.startsWith(`J`) || person.name.startsWith(`P`)) {
      return true;
    }
    return false;
  })
  .sort((a, b) => a.grade - b.grade)
  .pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => {
  return a.grade - b.grade;
});
console.log(peopleGrade);

// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => {
  return b.grade - a.grade;
});

console.log(peopleGrade);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
peopleGrade.sort((a, b) => {
  return b.grade - a.grade;
});

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
