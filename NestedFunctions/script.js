//Nested funcitons : functions inside anotehr functions

let username = "Om Patel";
let userInbox = 0;

login();

function login(){
    DisplayName();
    DisplayMessages();
    function DisplayName(){
        console.log(username);
    }
    function DisplayMessages(){
        console.log(userInbox);
    }
}
