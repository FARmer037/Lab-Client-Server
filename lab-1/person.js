var people = [
    {
        name: "John",
        age: 28
    }, 
    {
        name: "Jane",
        age: 31
    }, 
    {
        name: "Peter",
        age: 55
    }
]

var obj = people.reduce((obj, current) => ({...obj, [current.name]: current.age}), {});

console.log(obj)

var arr = Object.keys(obj)
    .map(function (key) {
        return obj[key];
    });

console.log(arr)

var youngerThan = (x) => {
    let young = people.filter(person => person.age < x);
    console.log(young)
}

var olderThan = (x) => {
    let young = people.filter(person => person.age > x);
    console.log(young)
}

youngerThan(40)
olderThan(40)
