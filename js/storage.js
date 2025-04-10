// storage.js - User data handling using localStorage
class UserStorage {
    static registerUser(username, password, email) {
        const users = JSON.parse(localStorage.getItem('elysiumUsers')) || [];
        
        // Check if user exists
        if (users.some(user => user.username === username)) {
            throw new Error('Username already exists');
        }
        
        // Add new user (Note: In production, hash passwords!)
        users.push({
            username,
            password, 
            email,
            createdAt: new Date().toISOString()
        });
        
        localStorage.setItem('elysiumUsers', JSON.stringify(users));
        localStorage.setItem('currentUser', username);
    }
    
    static loginUser(username, password) {
        const users = JSON.parse(localStorage.getItem('elysiumUsers')) || [];
        const user = users.find(u => u.username === username && u.password === password);
        
        if (!user) {
            throw new Error('Invalid credentials');
        }
        
        localStorage.setItem('currentUser', username);
        return true;
    }
    
    static getCurrentUser() {
        return localStorage.getItem('currentUser');
    }
    
    static logoutUser() {
        localStorage.removeItem('currentUser');
    }
}