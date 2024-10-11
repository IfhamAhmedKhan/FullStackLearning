const navLinks = document.querySelectorAll('nav a')

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute('href').substring(1); // Get target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate scroll position based on target element's top position
            const scrollPosition = targetElement.offsetTop;

            // Scroll smoothly to the target position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});

const BTN = document.getElementById('btn');

BTN.onclick = (event) => {
    event.preventDefault(); 
    
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;

    if(userName == ""){
        alert("Please enter your name")
    }
    else if (userEmail == ""){
        alert("Please enter your email")
    }
    else if (userMessage == ""){
        alert("Please enter your message")
    }
    const emailVal = "@gmail.com";

    if(!userEmail.includes(emailVal)){
        alert("Fix email format")
    }

    const messageLength = userMessage.length;

    if(messageLength <= 9){
        alert("Please enter minimum 10 characters")
    }


    console.log("User Information:", {
        name: userName,
        email: userEmail,
        message: userMessage
    });
};


const modeToggle = document.getElementById('mode-toggle');
const body = document.querySelector('body');

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Update button text based on mode
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = 'Light Mode';
  } else {
    modeToggle.textContent = 'Dark Mode';
  }
});