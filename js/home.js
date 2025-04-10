// Display current user on home page
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = UserStorage.getCurrentUser();
    if (currentUser) {
        document.getElementById('welcomeUser').textContent = `Welcome, ${currentUser}`;
    } else {
        window.location.href = 'login.html';
    }
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        UserStorage.logoutUser();
        window.location.href = 'index.html';
    });
});