document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (username === 'affiluxe2010pablo' && password === 'affiluxe2010') {
        window.location.href = 'dashboard2.html'; 
        return;
    }

    if (user) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'page.html'; 
    } else {
        errorMessage.textContent = "sorry this account can not be found!";
    }
});