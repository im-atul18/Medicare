
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;
    const chat = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'message sent';
    div.textContent = msg;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
    input.value = '';
}

document.getElementById('prescriptionForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    const med = document.getElementById('medication').value;
    const dose = document.getElementById('dosage').value;
    const dur = document.getElementById('duration').value;
    const date = new Date().toISOString().split('T')[0];
    const row = `<tr><td>${date}</td><td>${name}</td><td>${med}</td><td>${dose}</td><td>${dur}</td></tr>`;
    document.querySelector('#prescriptionList tbody').insertAdjacentHTML('afterbegin', row);
    e.target.reset();
    alert("Prescription added!");
});
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully! You will be redirected to the login page.');

        window.location.href = 'index.html';
    }
}
