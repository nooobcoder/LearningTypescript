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

enum ROLES {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: "Ankur",
	age: 30,
	hobbies: ["Sports", "Cooking"],
	role: ROLES.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === ROLES.ADMIN) console.log("is admin");
