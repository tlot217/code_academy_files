var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

/*
var search = funciton(lastName)


*/

function search (lastName) {
var contactsLength = contacts.length;
for (var i = 0 ; i < contacts.length; i++) {
if (contacts[i].lastName == lastName) {
printPerson (contacts[i]);
}

}
}

search ("Jones");

var add = function(first, last, telephone, email) {
contacts[contacts.length] = {
firstName: first,
lastName: last,
phoneNumber: telephone,
email: email

};
};

add("Jeremy", "blahhhh", "888-19992344444", "jeremyyyy");
list();





