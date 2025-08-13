/* ===============================
   MUSEUM MAP PAGE JAVASCRIPT
   =============================== */

// Navigation functions
function goBack() {
    // Check if there's browser history to go back to
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // If no history, navigate to homepage
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetView = item.getAttribute('data-view');
            
            // Remove active class from all nav items and views
            navItems.forEach(nav => nav.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));
            
            // Add active class to clicked nav item and corresponding view
            item.classList.add('active');
            document.querySelector(`.${targetView}-view`).classList.add('active');
        });
    });

    // Map controls functionality
    const zoomInBtn = document.querySelector('.zoom-in');
    const zoomOutBtn = document.querySelector('.zoom-out');
    const fullscreenBtn = document.querySelector('.fullscreen');
    const museumFloors = document.querySelector('.museum-floors');

    let currentZoom = 1;
    const minZoom = 0.5;
    const maxZoom = 2;
    const zoomStep = 0.1;

    zoomInBtn.addEventListener('click', () => {
        if (currentZoom < maxZoom) {
            currentZoom += zoomStep;
            updateZoom();
        }
    });

    zoomOutBtn.addEventListener('click', () => {
        if (currentZoom > minZoom) {
            currentZoom -= zoomStep;
            updateZoom();
        }
    });

    function updateZoom() {
        museumFloors.style.transform = `scale(${currentZoom})`;
        
        // Update button states
        zoomInBtn.style.opacity = currentZoom >= maxZoom ? '0.5' : '1';
        zoomOutBtn.style.opacity = currentZoom <= minZoom ? '0.5' : '1';
    }

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Visitor dot interactions
    const visitorDots = document.querySelectorAll('.visitor-dot');
    
    visitorDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            showVisitorInfo(dot);
        });
    });

    function showVisitorInfo(dot) {
        // Get crowd level
        let crowdLevel = 'Low';
        if (dot.classList.contains('medium')) {
            crowdLevel = 'Medium';
        } else if (dot.classList.contains('high')) {
            crowdLevel = 'High';
        }

        // Get floor information
        const floor = dot.closest('.floor');
        const floorName = floor.querySelector('.floor-label').textContent;

        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'visitor-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <h4 class="typography-h6">${floorName}</h4>
                <p class="typography-body2">Crowd Level: ${crowdLevel}</p>
                <p class="typography-caption">Click for more details</p>
            </div>
        `;

        // Position tooltip
        const rect = dot.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.left = `${rect.left + 10}px`;
        tooltip.style.top = `${rect.top - 60}px`;
        tooltip.style.background = 'rgba(0, 0, 0, 0.9)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '8px 12px';
        tooltip.style.borderRadius = '8px';
        tooltip.style.fontSize = '12px';
        tooltip.style.zIndex = '1000';
        tooltip.style.pointerEvents = 'none';

        document.body.appendChild(tooltip);

        // Remove tooltip after 3 seconds
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
            }
        }, 3000);
    }

    // Floor hover effects
    const floors = document.querySelectorAll('.floor-shape');
    
    floors.forEach(floor => {
        floor.addEventListener('mouseenter', () => {
            floor.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        floor.addEventListener('mouseleave', () => {
            floor.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Real-time crowd simulation (demo purposes)
    function simulateCrowdUpdates() {
        const dots = document.querySelectorAll('.visitor-dot');
        
        setInterval(() => {
            dots.forEach(dot => {
                // Randomly change crowd levels for demonstration
                if (Math.random() < 0.1) { // 10% chance to change
                    const levels = ['', 'medium', 'high'];
                    const currentLevel = dot.classList.contains('high') ? 2 : 
                                       dot.classList.contains('medium') ? 1 : 0;
                    
                    // Remove current level
                    dot.classList.remove('medium', 'high');
                    
                    // Add new random level
                    const newLevel = levels[Math.floor(Math.random() * levels.length)];
                    if (newLevel) {
                        dot.classList.add(newLevel);
                    }
                }
            });
        }, 5000); // Update every 5 seconds
    }

    // Start crowd simulation
    simulateCrowdUpdates();

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '5') {
            const index = parseInt(e.key) - 1;
            if (navItems[index]) {
                navItems[index].click();
            }
        }
        
        // Zoom with keyboard
        if (e.key === '+' || e.key === '=') {
            zoomInBtn.click();
        } else if (e.key === '-') {
            zoomOutBtn.click();
        }
        
        // Fullscreen with F key
        if (e.key === 'f' || e.key === 'F') {
            fullscreenBtn.click();
        }
        
        // Back navigation with Escape key
        if (e.key === 'Escape') {
            goBack();
        }
    });

    // Initialize zoom controls
    updateZoom();

    // Add smooth transitions for better UX
    const style = document.createElement('style');
    style.textContent = `
        .visitor-tooltip {
            animation: fadeInUp 0.3s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .museum-floors {
            transition: transform 0.3s ease-out;
        }
    `;
    document.head.appendChild(style);
});

// Export functions for potential external use
window.MuseumMap = {
    switchView: function(viewName) {
        const navItem = document.querySelector(`[data-view="${viewName}"]`);
        if (navItem) {
            navItem.click();
        }
    },
    
    getCrowdData: function() {
        const dots = document.querySelectorAll('.visitor-dot');
        const crowdData = {};
        
        document.querySelectorAll('.floor').forEach(floor => {
            const floorName = floor.querySelector('.floor-label').textContent;
            const floorDots = floor.querySelectorAll('.visitor-dot');
            
            let high = 0, medium = 0, low = 0;
            floorDots.forEach(dot => {
                if (dot.classList.contains('high')) high++;
                else if (dot.classList.contains('medium')) medium++;
                else low++;
            });
            
            crowdData[floorName] = { high, medium, low, total: floorDots.length };
        });
        
        return crowdData;
    }
};
