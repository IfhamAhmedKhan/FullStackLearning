let FirstName = document.getElementById("Fname"); 
let LastName = document.getElementById("Lname");
let Email = document.getElementById("Emailaddress");
let button = document.getElementById("button-id");

button.onclick = function() {
    document.getElementById("FirstName").textContent = FirstName.value;
    document.getElementById("LastName").textContent = LastName.value;
    document.getElementById("Email").textContent = Email.value;
}
