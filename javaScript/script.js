const users = {
    students: [
        { username: 'student1', password: 'pass1', name: 'Alice Johnson', courses: ['Math', 'Science'], grades: [90, 85] },
        { username: 'student2', password: 'pass2', name: 'Bob Smith', courses: ['History', 'English'], grades: [88, 92] },
        { username: 'student3', password: 'pass3', name: 'Charlie Brown', courses: ['Art', 'Music'], grades: [75, 80] },
        { username: 'student4', password: '.pass4', name: 'Daisy Miller', courses: ['Biology', 'Chemistry'], grades: [95, 90] },
        { username: 'student5', password: 'pass5', name: 'Ethan Hunt', courses: ['PE', 'Computer Science'], grades: [70, 85] },
        { username: 'student6', password: 'pass6', name: 'Fiona Green', courses: ['Math', 'Science'], grades: [60, 80] },
        { username: 'student7', password: 'pass7', name: 'George King', courses: ['Geography', 'History'], grades: [90, 92] },
        { username: 'student8', password: 'pass8', name: 'Hannah Lee', courses: ['Philosophy', 'Ethics'], grades: [85, 88] },
        { username: 'student9', password: 'pass9', name: 'Ian Wright', courses: ['Physics', 'Chemistry'], grades: [78, 82] },
        { username: 'student10', password: 'pass10', name: 'Julia White', courses: ['Art', 'Design'], grades: [80, 85] },
    ],
    faculty: [
        { username: 'faculty1', password: 'fpass1', name: 'Dr. Smith', contact: 'smith@college.edu' },
        { username: 'faculty2', password: 'fpass2', name: 'Prof. Johnson', contact: 'johnson@college.edu' },
        { username: 'faculty3', password: 'fpass3', name: 'Dr. Brown', contact: 'brown@college.edu' },
        { username: 'faculty4', password: 'fpass4', name: 'Prof. Miller', contact: 'miller@college.edu' },
        { username: 'faculty5', password: 'fpass5', name: 'Dr. Wilson', contact: 'wilson@college.edu' },
    ],
    admin: { username: 'admin', password: 'adminpass', name: 'mr.ganguram' }
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    let user;

    if (role === 'student') {
        user = users.students.find(u => u.username === username && u.password === password);
    } else if (role === 'faculty') {
        user = users.faculty.find(u => u.username === username && u.password === password);
    } else if (role === 'admin') {
        user = (users.admin.username === username && users.admin.password === password) ? users.admin : null;
    }

    if (user) {
        showDashboard(role, user);
    } else {
        document.getElementById('error-message').innerText = 'Invalid credentials. Please try again.';
    }
});

function showDashboard(role, user) {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');

    if (role === 'student') {
        displayStudentView(user);
    } else if (role === 'faculty') {
        displayFacultyView(user);
    } else if (role === 'admin') {
        displayAdminView(user);
    }
}

function displayStudentView(user) {
    const studentView = document.getElementById('student-view');
    studentView.innerHTML = `
        <h3>Welcome, ${user.name}</h3>
        <p>Courses: ${user.courses.join(', ')}</p>
        <p>Grades: ${user.grades.join(', ')}</p>
    `;
    studentView.classList.remove('hidden');
}

function displayFacultyView(user) {
    const facultyView = document.getElementById('faculty-view');
    facultyView.innerHTML = `
        <h3>Welcome, ${user.name}</h3>
        <p>Contact: ${user.contact}</p>
        <p>Manage your class list here...</p>
    `;
    facultyView.classList.remove('hidden');
}

function displayAdminView(user) {
    const adminView = document.getElementById('admin-view');
    adminView.innerHTML = `
        <h3>Welcome, ${user.name}</h3>
        <p>Manage student and faculty records...</p>
    `;
    adminView.classList.remove('hidden');
}
