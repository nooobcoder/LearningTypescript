// const person: {
//   name: string;
//   age: number;
// } = {
/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Ankur',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}; */
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["READ_ONLY"] = 1] = "READ_ONLY";
    ROLES[ROLES["AUTHOR"] = 2] = "AUTHOR";
})(ROLES || (ROLES = {}));
const person = {
    name: "Ankur",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: ROLES.ADMIN,
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === ROLES.ADMIN)
    console.log("is admin");
