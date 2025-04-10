// Complete Authentication JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Registration form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;
            
            try {
                UserStorage.registerUser(username, password, email);
                window.location.href = 'home.html';
            } catch (error) {
                showAuthError(error.message);
            }
        });
    }
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            
            try {
                UserStorage.loginUser(username, password);
                window.location.href = 'home.html';
            } catch (error) {
                showAuthError(error.message);
            }
        });
    }
    
    // Check if user is logged in on protected pages
    const protectedPages = ['home.html', 'self-help.html', 'for-others.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        if (!UserStorage.getCurrentUser()) {
            window.location.href = 'login.html';
        }
    }
});

function showAuthError(message) {
    // Create or display error message
    let errorElement = document.querySelector('.auth-error');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'auth-error';
        const form = document.querySelector('form');
        form.insertBefore(errorElement, form.firstChild);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    
    // Add animation
    errorElement.style.animation = 'shake 0.5s';
    setTimeout(() => {
        errorElement.style.animation = '';
    }, 500);
}