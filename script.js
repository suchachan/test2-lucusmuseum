// ===============================
// AUTHENTICATION & NAVIGATION
// ===============================

// Sign-in form handler
function handleSignIn(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (in real app, this would be server-side)
    if (username && password) {
        // Store user session (in real app, use proper authentication)
        sessionStorage.setItem('userLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        
        // Redirect to map page
        window.location.href = 'map.html';
    } else {
        alert('Please enter both username and password');
    }
}

// Check if user is logged in
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('userLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // If not logged in and not on index page, redirect to login
    if (!isLoggedIn && currentPage !== 'index.html' && currentPage !== '') {
        window.location.href = 'index.html';
    }
}

// Logout function
function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Go back function
function goBack() {
    logout(); // For now, going back means logging out
}

// Mode switching
function switchMode(mode) {
    // Update active tab
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (mode === 'visitor') {
        document.getElementById('visitorTab').classList.add('active');
        // Show visitor-specific features
        document.body.setAttribute('data-mode', 'visitor');
    } else if (mode === 'worker') {
        document.getElementById('workerTab').classList.add('active');
        // Show worker-specific features
        document.body.setAttribute('data-mode', 'worker');
    }
    
    // In a real app, this would update the UI to show different features
    console.log(`Switched to ${mode} mode`);
}

// Navigation function for CTA buttons
function navigateTo(page) {
    window.location.href = page;
}

// Accessibility toggle function
function toggleAccessibility() {
    document.body.classList.toggle('high-contrast');
    
    // You can add more accessibility features here
    const isHighContrast = document.body.classList.contains('high-contrast');
    
    if (isHighContrast) {
        // Add high contrast styles
        document.documentElement.style.setProperty('--bg-color', '#000000');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--button-bg', '#ffffff');
        document.documentElement.style.setProperty('--button-text', '#000000');
    } else {
        // Reset to normal styles
        document.documentElement.style.removeProperty('--bg-color');
        document.documentElement.style.removeProperty('--text-color');
        document.documentElement.style.removeProperty('--button-bg');
        document.documentElement.style.removeProperty('--button-text');
    }
    
    // Announce the change for screen readers
    const announcement = isHighContrast ? 'High contrast mode enabled' : 'High contrast mode disabled';
    announceToScreenReader(announcement);
}

// Call Alex function
function callAlex() {
    // This could integrate with a real communication system
    alert('Connecting you with Alex for assistance...\n\nIn a real implementation, this would:\n- Open a chat window\n- Initiate a phone call\n- Connect to customer service');
}

// Function to announce changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    // Handle escape key to close any modals or return to main state
    if (event.key === 'Escape') {
        // Reset any active states
        document.body.classList.remove('high-contrast');
    }
    
    // Handle Enter key on buttons
    if (event.key === 'Enter' && event.target.classList.contains('cta-button')) {
        event.target.click();
    }
});

// Add focus management for better accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication on page load
    checkAuth();
    
    // Initialize visitor mode by default
    if (document.getElementById('visitorTab')) {
        switchMode('visitor');
    }
    
    // Add focus styles for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        .cta-button:focus,
        .accessibility-btn:focus,
        .call-alex-btn:focus,
        .form-input:focus,
        .signin-button:focus,
        .mode-tab:focus,
        .logout-button:focus {
            outline: 3px solid #4A90E2;
            outline-offset: 2px;
        }
        
        .high-contrast .cta-button {
            background: var(--button-bg, rgba(255, 255, 255, 0.95)) !important;
            color: var(--button-text, #333) !important;
            border: 2px solid #ffffff !important;
        }
        
        .high-contrast .cta-button.primary {
            background: #000000 !important;
            color: #ffffff !important;
            border: 2px solid #ffffff !important;
        }
        
        .high-contrast body {
            background: var(--bg-color, inherit) !important;
            color: var(--text-color, inherit) !important;
        }
    `;
    document.head.appendChild(style);
});
