const findTheOldest = function(people) {
    const peopleAge = getAge(people);
    console.table(peopleAge);
    var maxAge = 0;
    var maxAgePerson = "";
    for (person in peopleAge) {
        if (peopleAge[person] > maxAge) {
            maxAge = peopleAge[person];
            maxAgePerson = person.toString();
        }
    }
    
    return people.find(person => person.name = maxAgePerson);
};

const getAge = function(people) {
    const ageSorted = people.reduce((age, person) => {
        if (!age[person.name]) {
            age[person.name] = 0;
        }
        if (person.yearOfDeath) {
            age[person.name] = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            age[person.name] = currentYear - person.yearOfBirth;
        }
        return age;
    }, {});
    return ageSorted;
}

// Do not edit below this line
module.exports = findTheOldest;
