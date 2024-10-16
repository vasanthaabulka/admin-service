document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');  // Load home section by default
});

const users = [
    { username: 'admin', password: 'password', role: 'admin' }
];

function loadSection(section) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear current content

    switch (section) {
        case 'home':
            mainContent.innerHTML = `
                <section id="home">
                    <h2>About Training Management System</h2>
                    <p>Welcome to our Training Management System! This platform is designed to streamline the management of training and development programs for large organizations. Here's what you can do:</p>
                    <ul>
                        <li><strong>Admins:</strong> Create and manage courses, track employee progress, and gather feedback.</li>
                        <li><strong>Account Managers:</strong> Submit training requests and view status updates.</li>
                        <li><strong>Employees:</strong> Access assigned courses, complete them, and provide feedback.</li>
                    </ul>
                    <p>Our goal is to enhance the learning experience, improve coordination, and effectively track employee development.</p>
                    <button onclick="loadSection('login')">Login</button>
                    <button onclick="loadSection('signup')">Sign Up</button>
                </section>
            `;
            break;

        case 'login':
            mainContent.innerHTML = `
                <section id="login">
                    <h2>Login</h2>
                    <form id="login-form">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                        <button type="submit">Login</button>
                    </form>
                </section>
            `;
            document.getElementById('login-form').addEventListener('submit', loginUser);
            break;

        case 'signup':
            mainContent.innerHTML = `
                <section id="signup">
                    <h2>Sign Up</h2>
                    <form id="signup-form">
                        <label for="new-username">Username:</label>
                        <input type="text" id="new-username" name="new-username" required>
                        <label for="new-password">Password:</label>
                        <input type="password" id="new-password" name="new-password" required>
                        <button type="submit">Sign Up</button>
                    </form>
                </section>
            `;
            document.getElementById('signup-form').addEventListener('submit', signupUser);
            break;

        case 'dashboard':
            mainContent.innerHTML = `
                <section id="dashboard">
                    <h2>Welcome, Admin</h2>
                    <p>Overview of your administrative tasks:</p>
                    <ul>
                        <li>Number of Requests: 5</li>
                        <li>Pending Approvals: 2</li>
                        <li>Courses Created: 10</li>
                        <li>Feedback Received: 8</li>
                    </ul>
                </section>
            `;
            break;

        case 'create_course':
            mainContent.innerHTML = `
                <section id="create-course">
                    <h2>New Course Form</h2>
                    <form id="create-course-form">
                        <label for="course-name">Course Name:</label>
                        <input type="text" id="course-name" name="course-name" required>
                        <label for="course-description">Course Description:</label>
                        <textarea id="course-description" name="course-description" required></textarea>
                        <button type="submit">Create Course</button>
                    </form>
                    <h2>Popular Course Videos</h2>
                    <div>
                        <h3>Python</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z1Yd7upQsXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h3>HTML</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pQN-pnXPaVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h3>CSS</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OXGznpKZ_sA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h3>JavaScript</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h3>Java</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/eIrMbAQSU34" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h3>Spring Boot</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/35EQXmHKZYs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </section>
            `;
            break;

        case 'manage_requests':
            mainContent.innerHTML = `
                <section id="manage-requests">
                    <h2>Training Requests</h2>
                    <ul id="requests-list">
                        <li>Request 1: Approved</li>
                        <li>Request 2: Pending</li>
                        <li>Request 3: Rejected</li>
                    </ul>
                </section>
            `;
            break;

        case 'track_progress':
            mainContent.innerHTML = `
                <section id="track-progress">
                    <h2>Employee Progress</h2>
                    <table>
                        <tr>
                            <th>Employee</th>
                            <th>Course</th>
                            <th>Progress</th>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Course 1</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>Course 2</td>
                            <td>In Progress</td>
                        </tr>
                    </table>
                </section>
            `;
            break;

        case 'feedback':
            mainContent.innerHTML = `
                <section id="feedback">
                    <h2>Employee Feedback</h2>
                    <form id="feedback-form">
                        <label for="employee-name">Employee Name:</label>
                        <input type="text" id="employee-name" name="employee-name" required>
                        <label for="feedback-text">Feedback:</label>
                        <textarea id="feedback-text" name="feedback-text" required></textarea>
                        <button type="submit">Submit Feedback</button>
                    </form>
                    <ul id="feedback-list"></ul>
                </section>
            `;
            document.getElementById('feedback-form').addEventListener('submit', submitFeedback);
            break;

        default:
            mainContent.innerHTML = `<p>Section not found.</p>`;
    }
}

function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful');
        loadSection('dashboard');
    } else {
        alert('Invalid credentials');
    }
}

function signupUser(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    users.push({ username: newUsername, password: newPassword, role: 'employee' });
    alert('Sign up successful');
    loadSection('login');  // Redirect to login after sign up
}

function submitFeedback(event) {
    event.preventDefault();
    const name = document.getElementById('employee-name').value;
    const feedback = document.getElementById('feedback-text').value;
    addFeedback(name, feedback);
}

function addFeedback(name, feedback) {
    const feedbackList = document.getElementById('feedback-list');
    const feedbackItem = document.createElement('li');
    feedbackItem.textContent = `${name}: ${feedback}`;
    feedbackList.appendChild(feedbackItem);
}
