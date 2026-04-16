document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const dashboard = document.getElementById('dashboard');
    const statusMsg = document.getElementById('status-message');
    const logoutBtn = document.getElementById('logout-btn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const user = document.getElementById('username').value.trim();
        const pass = document.getElementById('password').value.trim();

        statusMsg.className = "message-box"; // Reset classes
        statusMsg.style.display = "none";

        // Logic check
        if (!user || !pass) {
            showError("Fields cannot be empty");
        } else if (pass.length < 8 || pass.length > 12) {
            showError("Password must be 8-12 chars");
        } else if (user === "admin" && pass === "12345678") {
            loginContainer.classList.add('hidden');
            dashboard.classList.remove('hidden');
            document.getElementById('welcome-text').innerText = `Welcome, ${user}!`;
        } else {
            showError("Invalid credentials");
        }
    });

    logoutBtn.addEventListener('click', () => {
        dashboard.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        loginForm.reset();
        statusMsg.style.display = "none";
    });

    function showError(text) {
        statusMsg.innerText = text;
        statusMsg.classList.add('error-msg');
        statusMsg.style.display = "block";
    }
});