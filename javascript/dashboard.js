const users = JSON.parse(localStorage.getItem('users')) || [];
const usedOtp = JSON.parse(localStorage.getItem('usedOtp')) || [];
const usernameStorage = [];
const emailStorage = [];
const passwordStorage = [];
const otpStorage = [];

// Display users with their details
function displayUsers(filteredUsers) {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';
    filteredUsers.forEach((user, index) => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            Username: ${user.username},<br> 
            Email: ${user.email},<br> 
            Password: ${user.password},<br>
            OTP Used: ${user.otp} 
            <button onclick="deleteUser(${index})">Delete</button>
        `;
        userListElement.appendChild(userDiv);

        // Store data in objects
        usernameStorage.push(user.username);
        emailStorage.push(user.email);
        passwordStorage.push(user.password);
        otpStorage.push(user.otp);
    });
}

// Handle deletion of users
function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1); // Remove the user
        localStorage.setItem('users', JSON.stringify(users)); // Update localStorage
        searchUsers(); // Update the search results
    }
}

// Filter and search users
function searchUsers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(query)
    );
    displayUsers(filteredUsers);
}

// Initially display all users
displayUsers(users);
