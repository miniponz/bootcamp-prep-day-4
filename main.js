//eslint-disable-next-line
function greet(){
    
    // get the first name and last name inputs by id
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');

    // get values out of both inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value; //value is an input type
    console.log(firstName, lastName);

    // make greeting string
    var greeting = 'Hello ' + firstName + " " +lastName + '!';
    console.log(greeting);

    // display greeting

    //remove prompt?

}

// TODO: validate name inputs
// TODO: clear inputs after greet?