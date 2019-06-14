// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name
        this.age = attr.age
        this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}
class Instructor extends Person {
    constructor(attr) {
        super(attr)
        this.specialty = attr.specialty
        this.favLanguage = attr.specialty
        this.catchPhrase = attr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`
    }
    grading(Student) {
        Student.grade = Math.floor(Math.random() * 100)
        return `${Student.name} has score of ${Student.grade}`
    }
}

class Student extends Instructor {
    constructor(attr) {
        super(attr)
        this.previousBackground = attr.previousBackground
        this.className = attr.className
        this.favSubjects = attr.favSubjects
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
        if (this.grade > 70) {
            return `${this.name} is ready to graduate`
        }
        else {
            return `${this.name} needs to do more assignments to increase score`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr)
        this.gradClassName = attr.gradClassName
        this.favInstructor = attr.favInstructor
    }
    standup(channel) {
        return `${this.name} announces to ${channel},@channel standy times`
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
    }
}

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});
const lambdaDoc = new Instructor({
    name: 'Lambda Doc',
    age: 50,
    location: 'Universe',
    specialty: 'Unlimited Processing Power',
    favLanguage: 'All',
    catchPhrase: 'Believe'
})

const adnan = new Student({
    name: 'Adnan',
    age: 29,
    location: 'Tennessee',
    previousBackground: 'Bartender',
    className: 'Web21',
    favSubjects: ['C#', 'C++', 'JavaScript'],
    grade: 85
});
const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 99
});

const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});
const darren = new ProjectManager({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});

//Some Testing
//Instructor Testing
console.log(lambdaDoc.age)
console.log(lambdaDoc.catchPhrase)
console.log(lambdaDoc.speak())
console.log(dan.demo('C-Sharp'))
console.log(dan.grade(adnan, 'React Project'))

//Student Testing
console.log(adnan.listsSubjects())
console.log(adnan.PRAssignment('Flexbox Design'))

//Project ManagerTesting
console.log(darren.standup('Web21'))
console.log(brandon.debugsCode(adnan, 'Java'))

//Stretch Testing
console.log(dan.grading(adnan))
console.log(adnan.graduate())