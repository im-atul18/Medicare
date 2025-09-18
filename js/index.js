
const demoAccounts = {
    'dr.priya@hospital.com': {
        password: 'password123',
        role: 'doctor',
        name: 'Dr. Priya Sharma',
        specialization: 'Cardiology',
        license: 'MD123456'
    },

    'arjun.kumar@email.com': {
        password: 'password123',
        role: 'patient',
        name: 'Arjun Kumar',
        phone: '+91-98765-43210',
        dob: '1985-06-15'
    },

};

let selectedRole = '';

function switchForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    document.getElementById('message-container').innerHTML = '';
    if (formType === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleBtns[0].classList.add('active');
        toggleBtns[1].classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleBtns[1].classList.add('active');
        toggleBtns[0].classList.remove('active');
    }
}

function selectRole(role) {
    selectedRole = role;
    const roleOptions = document.querySelectorAll('.role-option');
    const doctorFields = document.getElementById('doctorFields');
    const patientFields = document.getElementById('patientFields');
    roleOptions.forEach(option => option.classList.remove('selected'));
    event.target.closest('.role-option').classList.add('selected');
    if (role === 'doctor') {
        doctorFields.style.display = 'block';
        patientFields.style.display = 'none';
    } else {
        doctorFields.style.display = 'none';
        patientFields.style.display = 'block';
    }
}

function fillDemoAccount(email, password) {
    document.getElementById('loginEmail').value = email;
    document.getElementById('loginPassword').value = password;
    switchForm('login');
    showMessage('Demo account credentials filled! Click Login to continue.', 'success');
}

function showMessage(message, type) {
    const container = document.getElementById('message-container');
    container.innerHTML = `<div class="${type}-message">${message}</div>`;
}

// Handle login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (demoAccounts[email] && demoAccounts[email].password === password) {
        const user = demoAccounts[email];
        showMessage(`Welcome back, ${user.name}! Redirecting...`, 'success');
        setTimeout(() => {
            if (user.role === 'doctor') {
                window.location.href = "doctor_dashboard.html";
            } else {
                window.location.href = "patient-dashboard.html";
            }
        }, 1200);
    } else {
        showMessage('Invalid email or password. Please try the demo accounts.', 'error');
    }
});

// Handle signup
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!selectedRole) {
        showMessage('Please select whether you are a Doctor or Patient.', 'error');
        return;
    }
    if (password !== confirmPassword) {
        showMessage('Passwords do not match.', 'error');
        return;
    }
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long.', 'error');
        return;
    }
    if (demoAccounts[email]) {
        showMessage('An account with this email already exists.', 'error');
        return;
    }
    showMessage(`Account created successfully for ${name}! You can now login.`, 'success');
    setTimeout(() => {
        document.getElementById('signupForm').reset();
        selectedRole = '';
        document.querySelectorAll('.role-option').forEach(option => option.classList.remove('selected'));
        document.getElementById('doctorFields').style.display = 'none';
        document.getElementById('patientFields').style.display = 'none';
        switchForm('login');
    }, 2000);
});
// Modal logic
var modal = document.getElementById("adminModal");
var btn = document.getElementById("adminLoginBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal when X clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Admin login check
document.getElementById("adminForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var email = document.getElementById("adminEmail").value;
  var pass = document.getElementById("adminPass").value;

  // ✅ Change these credentials as per your need
  if (email === "admin@gmail.com" && pass === "12345") {
    window.location.href = "admin.html"; // redirect
  } else {
    alert("Invalid Admin Credentials ❌");
  }
});
