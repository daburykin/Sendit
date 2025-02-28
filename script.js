document.addEventListener('DOMContentLoaded', () => {
    // Animate counters
    animateCounter('creator-count', 10000, 2000);
    animateCounter('transaction-count', 500000, 2500);
    animateCounter('country-count', 120, 1800);
    
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('h1, .hero-content p, .cta-group, .crypto-coins, .features-badge');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate-fade-in');
        }, 300 * index);
    });
});

// Function to animate counters
function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with commas
        element.textContent = formatNumber(Math.floor(current));
    }, 16);
}

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

