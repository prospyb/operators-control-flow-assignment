
// Question 3

// let subjects = 'ART';
// let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
// let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
// let artsSubjects = 'Government, Economics, Literature, History';
// let generalSubjects = 'English, Mathematics';

// if (subjects == 'ART') {
//     console.log(generalSubjects + ', ' + artsSubjects)
// } else if (subjects == 'SCIENCE') {
//     console.log(generalSubjects + ', ' + scienceSubjects)
// } else if (subjects == 'SOCIAL SCIENCE') {
//     console.log(generalSubjects + ', ' + socialScienceSubjects)
// }
//   else {
//     console.log(generalSubjects)
// }

// Answer: English, Mathematics, Government, Economics, Literature, History

// Question 4

    let num = 20;
    let pwr = 1;
    while (pwr <= num) {
      pwr *= 2;
    }
    if (pwr - num > num - pwr/2) {
      pwr /= 2;
    }
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);