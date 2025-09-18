
// Initialize dashboard
document.addEventListener('DOMContentLoaded', function () {
    loadUserInfo();
    setMinDate();
});

// Load user information
function loadUserInfo() {
    // In a real app, this would come from the login system
    const userData = {
        name: 'Arjun Kumar',
        email: 'arjun.kumar@email.com',
        phone: '+91-98765-43210'
    };

    document.getElementById('userName').textContent = userData.name;
}

// Show selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove active class from nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked nav link
    event.target.classList.add('active');
}

// Set minimum date for appointment booking
function setMinDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }
}

// Handle appointment form submission
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const doctor = document.getElementById('doctorSelect').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;
    const reason = document.getElementById('appointmentReason').value;

    if (!doctor || !date || !time || !reason) {
        alert('Please fill in all fields');
        return;
    }

    // Add to appointments list
    const appointmentsList = document.getElementById('appointmentsList');
    const newRow = appointmentsList.insertRow(0);

    const doctorName = document.getElementById('doctorSelect').selectedOptions[0].text;
    const formattedDate = new Date(date).toLocaleDateString();
    const formattedTime = document.getElementById('appointmentTime').selectedOptions[0].text;

    newRow.innerHTML = `
                <td>${formattedDate}</td>
                <td>${formattedTime}</td>
                <td>${doctorName}</td>
                <td>${reason}</td>
                <td><span class="status pending">Pending</span></td>
            `;

    // Clear form
    this.reset();

    alert('Appointment booked successfully! You will receive a confirmation soon.');
});

// Send chat message
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message === '') return;

    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent';
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    input.value = '';

    // Simulate doctor response after 2 seconds
    setTimeout(() => {
        const doctorResponse = document.createElement('div');
        doctorResponse.className = 'message received';
        doctorResponse.innerHTML = '<strong>Dr. Priya Sharma</strong><br>Thank you for your message. I will review and get back to you shortly.';

        chatMessages.appendChild(doctorResponse);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 2000);
}

// Handle Enter key in chat input
document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully! You will be redirected to the login page.');

        window.location.href = 'index.html';
    }
}
