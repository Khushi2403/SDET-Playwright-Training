Day 13 – Building Express Web App & Automating Login with Playwright

🔹 Topics Covered
1. Creating a web server using Express
2. Serving static HTML/CSS files
3. Handling GET and POST routes
4. Using dotenv for environment variables
5. Frontend–backend communication using fetch()
6. Creating a Login form UI
7. Data validation on server
8. Writing data-driven tests using Playwright
9. Understanding why server must run before tests
10. Debugging ERR_CONNECTION_REFUSED


1) Express Server Setup (Backend)
🔹Created a Node.js server to serve pages and validate login.

🔹JavaScript code
const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


2) Routes for Pages

🔹Serving HTML pages from public folder.

🔹JavaScript code
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});

3) Login Validation API (POST)

🔹Server checks username and password and sends response.

🔹JavaScript code
app.post('/loginwithcreds', (req, res) => {
  const { username, password } = req.body;

  if(username.length <= 3 || password.length <= 5) {
    res.send("Username length must be greater than 3 & Password 5");
  } else if (username === "admin123" && password === "admin123") {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

4) Starting the Server
🔹JavaScript code
app.listen(PORT, () => console.log(`App started on PORT:${PORT}`));

🔹.env file:
PORT=3000

5) Login Page (Frontend)

🔹Login form sends data to server using fetch() without reloading page.

🔹HTML code
<form id="loginForm">
  <input id="username" name="username" />
  <input id="password" name="password" />
  <button id="loginBtn">Login</button>
  <div id="msg"></div>
</form>

🔹JavaScript code
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const username = formData.get('username');
  const password = formData.get('password');

  const response = await fetch('/loginwithcreds', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  msg.textContent = await response.text();
});

6) Playwright Data-Driven Test

🔹Automated login testing with multiple inputs.

🔹JavaScript code
import { test, expect } from '@playwright/test';

const loginData = [
  { username: "tom", password: "tom", expected: "Username length must be greater than 3 & Password 5" },
  { username: "admin123", password: "admin123", expected: "Login successful" },
];

for (const data of loginData) {
  test(`Login with ${data.username}`, async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('#username', data.username);
    await page.fill('#password', data.password);
    await page.click('#loginBtn');

    await expect(page.locator('#msg')).toHaveText(data.expected);
  });
}


7) How to Run

🔹JavaScript codeStart server
cd webapp
node index.js

🔹JavaScript codeRun tests (new terminal)
npx playwright test