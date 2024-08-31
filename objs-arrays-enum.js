"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maryor',
//     age: 30,
//     hobbies: ['Sport', 'Music'],
//     role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR =2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Maryor',
    age: 30,
    hobbies: ['Sport', 'Music'],
    role: Role.AUTHOR
};
// person.role.push('admin');
person.role[1] = 'Musics';
console.log(person.role);
let favoriteActivities;
favoriteActivities = ['Music'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
if (person.role === Role.AUTHOR) {
    console.log('is Author');
}
if (person.role === Role.READ_ONLY) {
    console.log('READ ONLY');
}
