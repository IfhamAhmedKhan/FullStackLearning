document.getElementById("submit-btn").onclick = function() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let userDetails = [name, age, email];

    document.getElementById("output-array").textContent = JSON.stringify(userDetails);
}


