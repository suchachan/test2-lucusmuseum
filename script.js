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
    // Add focus styles for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        .cta-button:focus,
        .accessibility-btn:focus,
        .call-alex-btn:focus {
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
