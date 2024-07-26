document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayMessage('Invalid email address', 'error');
        return;
    }

   
    if (password.length < 6) {
        displayMessage('Password must be at least 6 characters long', 'error');
        return;
    }

   
    if (password !== confirmPassword) {
        displayMessage('Passwords do not match', 'error');
        return;
    }

    
    document.getElementById('signupForm').reset();
    displayMessage('Signup successful!', 'success');
});

function displayMessage(message, type) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type;
    setTimeout(function() {
        messageElement.textContent = '';
    }, 3000); 
}
