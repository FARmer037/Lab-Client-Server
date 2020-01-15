var info = [
    {
        subject: 'Math',
        grade: 2.0
    }, 
    {
        subject: 'Physic',
        grade: 3.5
    }, 
    {
        subject: 'English',
        grade: 2.5
    },
    {
        subject: 'Chemistry',
        grade: 4.0
    }
]

// แปลง Arry ให้เป็น Object โดยมีชื่อวิชาเป็น key และ เกรดเป็น value
var obj = info.reduce((obj, current) => ({...obj, [current.subject]: current.grade}), {});

console.log(obj)

// แปลง Object เป็น Array
var grades = Object.keys(obj)
    .map(function (key) {
        return obj[key];
    });

    // console.log(grades);

let count = 0
let total = 0

for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== undefined) {
        count++
        total += grades[i]
    }
}

let avg = total / count

console.log('Your grade is ' + avg)