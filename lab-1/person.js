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

var youngerThan = (x) => {
    let young = people.filter(person => person.age < x);

    for(let i = 0; i < young.length; i++) {
        console.log(young[i].name)
    }
}

var olderThan = (x) => {
    let young = people.filter(person => person.age > x);
    
    for(let i = 0; i < young.length; i++) {
        console.log(young[i].name)
    }
}

youngerThan(40)
olderThan(40)
