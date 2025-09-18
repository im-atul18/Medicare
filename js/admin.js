
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');
        showSection(section);
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    function showSection(sectionName) {
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionName).classList.add('active');

      const titles = {
        'dashboard': 'Dashboard Overview',
        'doctors': 'Doctors Management',
        'patients': 'Patients Management',
        'appointments': 'Appointments Management',
        'reports': 'Reports & Analytics'
      };
      document.getElementById('page-title').textContent = titles[sectionName] || 'Dashboard';
    }

    function openModal(modalId) {
      document.getElementById(modalId).style.display = 'block';
    }

    function closeModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
    }

    window.onclick = function (event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    }

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully! You will be redirected to the login page.');

        window.location.href = 'index.html';
    }
}

  