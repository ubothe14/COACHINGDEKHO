import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/serve-static'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Mock data for coaching institutes
const mockInstitutes = [
  {
    id: 1,
    name: "Career Launcher",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 2340,
    location: "Delhi NCR",
    exams: ["MBA", "GMAT", "NMAT"],
    priceRange: "₹50,000 - ₹1,50,000",
    badge: "Top Rated",
    features: ["Live Classes", "Mock Tests", "Doubt Sessions"]
  },
  {
    id: 2,
    name: "Allen Career Institute",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 5670,
    location: "Kota, Rajasthan",
    exams: ["JEE", "NEET"],
    priceRange: "₹1,00,000 - ₹2,00,000",
    badge: "Best Seller",
    features: ["Classroom", "Study Material", "Test Series"]
  },
  {
    id: 3,
    name: "Aakash Institute",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 3890,
    location: "Mumbai, Bangalore",
    exams: ["NEET", "JEE"],
    priceRange: "₹80,000 - ₹1,80,000",
    badge: "Verified",
    features: ["Hybrid Mode", "Digital Content", "Mentorship"]
  },
  {
    id: 4,
    name: "Vajiram & Ravi",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 1890,
    location: "Delhi",
    exams: ["UPSC", "State PSC"],
    priceRange: "₹60,000 - ₹1,20,000",
    badge: "Top Rated",
    features: ["GS Foundation", "Current Affairs", "Answer Writing"]
  },
  {
    id: 5,
    name: "TIME Institute",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 2100,
    location: "Bangalore, Chennai",
    exams: ["MBA", "GMAT", "CAT"],
    priceRange: "₹45,000 - ₹1,00,000",
    badge: "Popular",
    features: ["Weekend Batches", "Online Portal", "Personalized Learning"]
  },
  {
    id: 6,
    name: "Resonance",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 4200,
    location: "Kota, Multiple Cities",
    exams: ["JEE", "NEET", "Foundation"],
    priceRange: "₹90,000 - ₹2,50,000",
    badge: "Best Seller",
    features: ["DLPD Program", "Scholarship Tests", "Performance Analysis"]
  }
]

const testimonials = [
  {
    name: "Priya Sharma",
    exam: "NEET 2024",
    rank: "AIR 342",
    institute: "Allen Career Institute",
    image: "https://i.pravatar.cc/150?img=1",
    review: "The teaching methodology and regular tests helped me improve my scores consistently. Highly recommended!",
    rating: 5
  },
  {
    name: "Rahul Verma",
    exam: "CAT 2024",
    percentile: "99.2%ile",
    institute: "Career Launcher",
    image: "https://i.pravatar.cc/150?img=3",
    review: "Amazing faculty and study material. The mock tests were exactly like the actual CAT exam.",
    rating: 5
  },
  {
    name: "Ananya Gupta",
    exam: "UPSC CSE 2024",
    rank: "Rank 89",
    institute: "Vajiram & Ravi",
    image: "https://i.pravatar.cc/150?img=5",
    review: "Best decision I made was joining this institute. The answer writing practice sessions were game-changers!",
    rating: 5
  }
]

// API Routes
app.get('/api/institutes', (c) => {
  return c.json(mockInstitutes)
})

app.get('/api/institutes/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const institute = mockInstitutes.find(i => i.id === id)
  if (!institute) {
    return c.json({ error: 'Institute not found' }, 404)
  }
  return c.json(institute)
})

app.get('/api/testimonials', (c) => {
  return c.json(testimonials)
})

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coaching Dekho - Find the Best Coaching Institutes for Competitive Exams</title>
        <meta name="description" content="Discover, compare and choose the best coaching institutes for MBA, NEET, JEE, UPSC, GMAT, and other competitive exams">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/static/styles.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#1877F2',
                  secondary: '#E23744',
                  dark: '#1F2937',
                  light: '#F5F7FA'
                },
                fontFamily: {
                  sans: ['Inter', 'sans-serif'],
                  display: ['Poppins', 'sans-serif']
                }
              }
            }
          }
        </script>
    </head>
    <body class="font-sans text-dark bg-white">
        <!-- Navigation -->
        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-8">
                        <a href="/" class="flex items-center space-x-2">
                            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <span class="text-2xl font-display font-bold">
                                <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>
                            </span>
                        </a>
                        <div class="hidden md:flex space-x-6">
                            <a href="#exams" class="text-gray-700 hover:text-primary transition font-medium">Exams</a>
                            <a href="#institutes" class="text-gray-700 hover:text-primary transition font-medium">Institutes</a>
                            <a href="#reviews" class="text-gray-700 hover:text-primary transition font-medium">Reviews</a>
                            <a href="#about" class="text-gray-700 hover:text-primary transition font-medium">About</a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="hidden md:block text-gray-700 hover:text-primary transition font-medium">Sign In</button>
                        <button class="bg-secondary hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition shadow-md hover:shadow-lg">
                            List Your Institute
                        </button>
                        <button class="md:hidden text-gray-700">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 pt-16 pb-24">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-12">
                    <div class="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span class="text-sm font-medium text-gray-700">10,000+ Students Enrolled This Month 🔥</span>
                    </div>
                    <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-dark mb-6 leading-tight">
                        Find Your Perfect<br>
                        <span class="text-primary">Coaching</span> <span class="text-secondary">Partner</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover, compare & choose from <span class="font-bold text-primary">1000+</span> verified coaching institutes for competitive exams
                    </p>
                    
                    <!-- Search Bar -->
                    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3">
                        <div class="flex-1 flex items-center px-4 py-3 bg-light rounded-xl">
                            <i class="fas fa-book-open text-primary mr-3"></i>
                            <select class="bg-transparent flex-1 outline-none text-dark font-medium">
                                <option>Select Exam</option>
                                <option>JEE (Main + Advanced)</option>
                                <option>NEET UG</option>
                                <option>MBA (CAT/XAT/GMAT)</option>
                                <option>UPSC CSE</option>
                                <option>CUET UG/PG</option>
                                <option>NMAT</option>
                            </select>
                        </div>
                        <div class="flex-1 flex items-center px-4 py-3 bg-light rounded-xl">
                            <i class="fas fa-map-marker-alt text-primary mr-3"></i>
                            <select class="bg-transparent flex-1 outline-none text-dark font-medium">
                                <option>Select City</option>
                                <option>Delhi NCR</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                                <option>Kota</option>
                                <option>Hyderabad</option>
                                <option>Chennai</option>
                                <option>Pune</option>
                            </select>
                        </div>
                        <button class="bg-secondary hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                            <i class="fas fa-search"></i>
                            <span>Search</span>
                        </button>
                    </div>

                    <!-- Trending Exams -->
                    <div class="mt-8 flex flex-wrap justify-center gap-3">
                        <span class="text-gray-600 font-medium">Trending:</span>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            JEE 2025
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            NEET 2025
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            UPSC CSE
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            CAT 2025
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Exam Categories Grid -->
        <section id="exams" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Popular <span class="text-primary">Exam</span> Categories
                    </h2>
                    <p class="text-lg text-gray-600">Choose your target exam and explore coaching options</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <!-- JEE -->
                    <div class="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-primary hover:to-blue-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-atom text-3xl text-primary group-hover:text-primary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">JEE</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Main + Advanced</p>
                        <div class="mt-4 text-xs font-semibold text-primary group-hover:text-white">250+ Institutes →</div>
                    </div>

                    <!-- NEET -->
                    <div class="group bg-gradient-to-br from-red-50 to-red-100 hover:from-secondary hover:to-red-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-heartbeat text-3xl text-secondary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">NEET</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Medical Entrance</p>
                        <div class="mt-4 text-xs font-semibold text-secondary group-hover:text-white">180+ Institutes →</div>
                    </div>

                    <!-- MBA -->
                    <div class="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-500 hover:to-purple-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-briefcase text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">MBA</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">CAT, XAT, GMAT</p>
                        <div class="mt-4 text-xs font-semibold text-purple-600 group-hover:text-white">120+ Institutes →</div>
                    </div>

                    <!-- UPSC -->
                    <div class="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-500 hover:to-green-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-landmark text-3xl text-green-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">UPSC</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Civil Services</p>
                        <div class="mt-4 text-xs font-semibold text-green-600 group-hover:text-white">90+ Institutes →</div>
                    </div>

                    <!-- CUET -->
                    <div class="group bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-university text-3xl text-yellow-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">CUET</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">UG & PG</p>
                        <div class="mt-4 text-xs font-semibold text-yellow-600 group-hover:text-white">75+ Institutes →</div>
                    </div>

                    <!-- GMAT -->
                    <div class="group bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-500 hover:to-indigo-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-globe text-3xl text-indigo-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">GMAT</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Global MBA</p>
                        <div class="mt-4 text-xs font-semibold text-indigo-600 group-hover:text-white">50+ Institutes →</div>
                    </div>

                    <!-- NMAT -->
                    <div class="group bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-500 hover:to-pink-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-chart-line text-3xl text-pink-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">NMAT</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">NMIMS Entrance</p>
                        <div class="mt-4 text-xs font-semibold text-pink-600 group-hover:text-white">40+ Institutes →</div>
                    </div>

                    <!-- More Exams -->
                    <div class="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-500 hover:to-gray-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-ellipsis-h text-3xl text-gray-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">More</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">View All Exams</p>
                        <div class="mt-4 text-xs font-semibold text-gray-600 group-hover:text-white">Explore →</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Coaching Institutes -->
        <section id="institutes" class="py-20 bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-end mb-12">
                    <div>
                        <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                            Top <span class="text-secondary">Coaching</span> Institutes
                        </h2>
                        <p class="text-lg text-gray-600">Handpicked & verified institutes with proven track records</p>
                    </div>
                    <button class="hidden md:block text-primary font-bold hover:text-secondary transition">
                        View All <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>

                <!-- Horizontal Scrolling Container -->
                <div class="overflow-x-auto pb-4 hide-scrollbar">
                    <div id="institutes-container" class="flex space-x-6 w-max">
                        <!-- Cards will be loaded here by JavaScript -->
                    </div>
                </div>

                <!-- View All Button for Mobile -->
                <div class="md:hidden text-center mt-8">
                    <button class="text-primary font-bold hover:text-secondary transition">
                        View All Institutes <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Why Coaching Dekho -->
        <section id="about" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Why <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>?
                    </h2>
                    <p class="text-lg text-gray-600">Your trusted partner in finding the perfect coaching institute</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Feature 1 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-shield-check text-3xl text-primary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">100% Verified</h3>
                        <p class="text-gray-600">All institutes are thoroughly verified and quality-checked by our team</p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-star text-3xl text-secondary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Real Reviews</h3>
                        <p class="text-gray-600">Authentic student reviews to help you make informed decisions</p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-balance-scale text-3xl text-green-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Easy Comparison</h3>
                        <p class="text-gray-600">Compare fees, faculty, results & facilities side-by-side</p>
                    </div>

                    <!-- Feature 4 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-headset text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Free Support</h3>
                        <p class="text-gray-600">Our counselors help you choose the right coaching for free</p>
                    </div>
                </div>

                <!-- Stats -->
                <div class="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">1000+</div>
                            <div class="text-white/80">Coaching Institutes</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">50K+</div>
                            <div class="text-white/80">Students Enrolled</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">15K+</div>
                            <div class="text-white/80">Verified Reviews</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">98%</div>
                            <div class="text-white/80">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Student Testimonials -->
        <section id="reviews" class="py-20 bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Success <span class="text-secondary">Stories</span>
                    </h2>
                    <p class="text-lg text-gray-600">Hear from students who achieved their dreams</p>
                </div>

                <div id="testimonials-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Testimonials will be loaded here by JavaScript -->
                </div>

                <div class="text-center mt-12">
                    <button class="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl">
                        Read More Success Stories <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-primary via-blue-600 to-secondary">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-rocket text-4xl text-white"></i>
                </div>
                <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p class="text-xl text-white/90 mb-8">
                    Join thousands of students who found their perfect coaching institute through CoachingDekho
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl">
                        <i class="fas fa-search mr-2"></i>
                        Find Your Coaching
                    </button>
                    <button class="bg-secondary hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl border-2 border-white/20">
                        <i class="fas fa-building mr-2"></i>
                        List Your Institute
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-dark text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <!-- Brand -->
                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <span class="text-2xl font-display font-bold">
                                <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>
                            </span>
                        </div>
                        <p class="text-gray-400 mb-4">Your trusted partner in finding the perfect coaching institute for competitive exams.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Quick Links</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-primary transition">About Us</a></li>
                            <li><a href="#" class="hover:text-primary transition">How It Works</a></li>
                            <li><a href="#" class="hover:text-primary transition">Success Stories</a></li>
                            <li><a href="#" class="hover:text-primary transition">Blog</a></li>
                            <li><a href="#" class="hover:text-primary transition">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Popular Exams -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Popular Exams</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-primary transition">JEE Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">NEET Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">UPSC Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">MBA Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">CUET Coaching</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Contact Us</h3>
                        <ul class="space-y-3 text-gray-400">
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-envelope text-primary mt-1"></i>
                                <span>support@coachingdekho.com</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-phone text-primary mt-1"></i>
                                <span>+91 9876543210</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-map-marker-alt text-primary mt-1"></i>
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2026 CoachingDekho. All rights reserved.
                    </p>
                    <div class="flex space-x-6 text-sm text-gray-400">
                        <a href="#" class="hover:text-primary transition">Privacy Policy</a>
                        <a href="#" class="hover:text-primary transition">Terms of Service</a>
                        <a href="#" class="hover:text-primary transition">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>

        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
