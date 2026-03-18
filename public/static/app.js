// Coaching Dekho - Frontend JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadInstitutes();
    loadTestimonials();
    initSmoothScroll();
    initNavbarScroll();
    initAnimations();
});

// Load coaching institutes from API
async function loadInstitutes() {
    const container = document.getElementById('institutes-container');
    
    // Show loading skeleton
    container.innerHTML = Array(6).fill(0).map(() => `
        <div class="institute-card bg-white rounded-2xl overflow-hidden shadow-lg" style="min-width: 350px;">
            <div class="skeleton h-48 w-full"></div>
            <div class="p-6">
                <div class="skeleton h-6 w-3/4 mb-4"></div>
                <div class="skeleton h-4 w-1/2 mb-4"></div>
                <div class="skeleton h-4 w-full mb-2"></div>
                <div class="skeleton h-4 w-full"></div>
            </div>
        </div>
    `).join('');

    try {
        const response = await fetch('/api/institutes');
        const institutes = await response.json();
        
        container.innerHTML = institutes.map(institute => createInstituteCard(institute)).join('');
        
        // Add stagger animation
        const cards = container.querySelectorAll('.institute-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'slideInRight 0.6s ease-out';
            }, index * 100);
        });
    } catch (error) {
        console.error('Error loading institutes:', error);
        container.innerHTML = '<p class="text-red-500">Failed to load institutes. Please try again later.</p>';
    }
}

// Create institute card HTML
function createInstituteCard(institute) {
    const badgeClass = {
        'Top Rated': 'badge-top-rated',
        'Best Seller': 'badge-best-seller',
        'Verified': 'badge-verified',
        'Popular': 'badge-popular'
    }[institute.badge] || 'badge-verified';

    return `
        <div class="institute-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 shine-effect" style="min-width: 350px; max-width: 400px;">
            <!-- Image -->
            <div class="relative h-48 overflow-hidden">
                <img src="${institute.image}" alt="${institute.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute top-4 left-4">
                    <span class="badge ${badgeClass}">
                        ${institute.badge}
                    </span>
                </div>
                <div class="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                    <div class="rating-stars flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span class="font-bold text-dark">${institute.rating}</span>
                        <span class="text-gray-500 text-sm">(${institute.reviews})</span>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="p-6">
                <!-- Institute Name -->
                <h3 class="font-display font-bold text-xl text-dark mb-2 hover:text-primary transition cursor-pointer">
                    ${institute.name}
                </h3>

                <!-- Location -->
                <div class="flex items-center text-gray-600 text-sm mb-3">
                    <i class="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span>${institute.location}</span>
                </div>

                <!-- Exams -->
                <div class="flex flex-wrap gap-2 mb-4">
                    ${institute.exams.map(exam => `
                        <span class="px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-semibold">
                            ${exam}
                        </span>
                    `).join('')}
                </div>

                <!-- Features -->
                <div class="mb-4">
                    <div class="flex flex-wrap gap-2">
                        ${institute.features.slice(0, 3).map(feature => `
                            <span class="text-xs text-gray-600 flex items-center">
                                <i class="fas fa-check-circle text-green-500 mr-1"></i>
                                ${feature}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Price Range -->
                <div class="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div>
                        <div class="text-xs text-gray-500 mb-1">Fee Range</div>
                        <div class="price-range text-green-600 font-bold">${institute.priceRange}</div>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3">
                    <button onclick="viewDetails(${institute.id})" class="flex-1 bg-primary hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition shadow-md hover:shadow-lg">
                        View Details
                    </button>
                    <button onclick="compareInstitute(${institute.id})" class="bg-gray-100 hover:bg-gray-200 text-dark px-4 py-3 rounded-xl transition">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                    <button onclick="shareInstitute(${institute.id})" class="bg-gray-100 hover:bg-gray-200 text-dark px-4 py-3 rounded-xl transition">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Load testimonials from API
async function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    
    try {
        const response = await fetch('/api/testimonials');
        const testimonials = await response.json();
        
        container.innerHTML = testimonials.map(testimonial => createTestimonialCard(testimonial)).join('');
        
        // Add stagger animation
        const cards = container.querySelectorAll('.testimonial-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.6s ease-out';
            }, index * 150);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

// Create testimonial card HTML
function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <!-- Student Info -->
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full object-cover border-4 border-blue-100">
                <div class="ml-4">
                    <h4 class="font-display font-bold text-lg text-dark">${testimonial.name}</h4>
                    <p class="text-sm text-gray-600">${testimonial.exam}</p>
                </div>
            </div>

            <!-- Achievement Badge -->
            <div class="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full mb-4">
                <i class="fas fa-trophy"></i>
                <span class="font-bold text-sm">${testimonial.rank || testimonial.percentile}</span>
            </div>

            <!-- Review -->
            <p class="text-gray-700 mb-4 leading-relaxed">
                "${testimonial.review}"
            </p>

            <!-- Rating -->
            <div class="flex items-center justify-between">
                <div class="rating-stars">
                    ${Array(testimonial.rating).fill(0).map(() => '<i class="fas fa-star"></i>').join('')}
                </div>
                <span class="text-xs text-gray-500">${testimonial.institute}</span>
            </div>
        </div>
    `;
}

// View institute details
function viewDetails(id) {
    console.log('Viewing details for institute:', id);
    // In a real application, this would navigate to a details page
    alert(`Opening details for institute ID: ${id}\n\nIn production, this would show:\n- Complete course details\n- Faculty information\n- Fee structure\n- Student reviews\n- Contact information`);
}

// Compare institutes
function compareInstitute(id) {
    console.log('Adding institute to comparison:', id);
    
    // Check if comparison array exists in localStorage
    let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    
    if (compareList.includes(id)) {
        alert('This institute is already in your comparison list!');
        return;
    }
    
    if (compareList.length >= 3) {
        alert('You can compare up to 3 institutes at a time. Please remove one to add another.');
        return;
    }
    
    compareList.push(id);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    
    // Show success notification
    showNotification(`Added to comparison (${compareList.length}/3)`, 'success');
}

// Share institute
function shareInstitute(id) {
    console.log('Sharing institute:', id);
    
    if (navigator.share) {
        navigator.share({
            title: 'Coaching Dekho - Institute',
            text: 'Check out this coaching institute on CoachingDekho!',
            url: window.location.href + '?institute=' + id
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        const url = window.location.href + '?institute=' + id;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-blue-500'
    } text-white font-semibold`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Search functionality
function performSearch() {
    const exam = document.querySelector('select[name="exam"]')?.value;
    const city = document.querySelector('select[name="city"]')?.value;
    
    console.log('Searching for:', { exam, city });
    
    // In production, this would filter institutes and update the display
    showNotification('Searching for institutes...', 'info');
    
    // Scroll to institutes section
    document.getElementById('institutes')?.scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.toggle('hidden');
}

// Initialize comparison view
function initComparisonView() {
    const compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    if (compareList.length > 0) {
        console.log('Institutes in comparison:', compareList);
    }
}

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Form validation
function validateContactForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
        errors.push('Please enter a valid 10-digit phone number');
    }
    
    return errors;
}

// Export functions for global access
window.viewDetails = viewDetails;
window.compareInstitute = compareInstitute;
window.shareInstitute = shareInstitute;
window.performSearch = performSearch;
window.toggleMobileMenu = toggleMobileMenu;

console.log('🎓 Coaching Dekho initialized successfully!');
