function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
      let nextMultipleOf5 = grades[i] + (5 - grades[i] % 5);
      if (grades[i] < 38 || nextMultipleOf5 - grades[i] >= 3) {
        console.log(grades[i]);
      } else {
        console.log(nextMultipleOf5);
      }
    }
  }
  
  let grades1 = [73, 67, 38, 33];
gradingStudents(grades1)