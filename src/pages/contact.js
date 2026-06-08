export default function Contact() {
  return `

<!-- Contact Hero -->
<section class="pt-32 pb-20 px-6">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-6xl lg:text-7xl font-black mb-8">
      Get in <span class="gradient-text">Touch</span>
    </h1>
    <p class="text-xl text-gray-600 max-w-2xl">
      Have a question or ready to start your next project? We'd love to hear from you. Let's connect!
    </p>
  </div>
</section>

<!-- Contact Content -->
<section class="py-20 px-6">
  <div class="max-w-5xl mx-auto">
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      
      <!-- Email -->
      <div class="glass p-8 rounded-2xl border border-gray-200 text-center">
        <div class="text-5xl mb-4">✉️</div>
        <h3 class="text-xl font-bold mb-3">Email</h3>
        <p class="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
        <a href="mailto:info@aamblv.com" class="text-blue-600 font-bold hover:underline">
          info@aamblv.com
        </a>
      </div>

      <!-- Phone -->
      <div class="glass p-8 rounded-2xl border border-gray-200 text-center">
        <div class="text-5xl mb-4">📱</div>
        <h3 class="text-xl font-bold mb-3">Phone</h3>
        <p class="text-gray-600 mb-4">Call us during business hours to discuss your project.</p>
        <a href="tel:+911234567890" class="text-blue-600 font-bold hover:underline">
          +91 123-456-7890
        </a>
      </div>

      <!-- Location -->
      <div class="glass p-8 rounded-2xl border border-gray-200 text-center">
        <div class="text-5xl mb-4">📍</div>
        <h3 class="text-xl font-bold mb-3">Location</h3>
        <p class="text-gray-600">
          New Delhi, India<br>
          <span class="text-sm">Available globally</span>
        </p>
      </div>

    </div>

    <!-- Contact Form -->
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">Send us a Message</h2>
      <form class="space-y-6" onsubmit="handleSubmit(event)">
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-bold mb-2">Full Name *</label>
            <input 
              type="text" 
              placeholder="John Doe"
              required
              class="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-bold mb-2">Email Address *</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              required
              class="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+91 98765-43210"
              class="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-bold mb-2">Company Name</label>
            <input 
              type="text" 
              placeholder="Your Company"
              class="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <div>
          <label class="block text-gray-700 font-bold mb-2">Service Interest *</label>
          <select required class="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600">
            <option value="">Select a service</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="cloud">Cloud Solutions</option>
            <option value="ai">AI & Automation</option>
            <option value="design">Branding & Design</option>
            <option value="transformation">Digital Transformation</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 font-bold mb-2">Budget Range</label>
          <select class="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600">
            <option value="">Select budget</option>
            <option value="10k">Under $10,000</option>
            <option value="25k">$10,000 - $25,000</option>
            <option value="50k">$25,000 - $50,000</option>
            <option value="100k">$50,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 font-bold mb-2">Message *</label>
          <textarea 
            placeholder="Tell us about your project..."
            required
            rows="6"
            class="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 resize-none"
          ></textarea>
        </div>

        <div>
          <label class="flex items-center">
            <input type="checkbox" required class="w-5 h-5 text-blue-600 rounded" />
            <span class="ml-3 text-gray-700">I agree to be contacted about my project</span>
          </label>
        </div>

        <button 
          type="submit"
          class="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>

<!-- Follow Us -->
<section class="py-20 px-6 bg-gray-50">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8">Follow Our Latest Updates</h2>
    <div class="flex justify-center gap-6 mb-8">
      <a href="#" class="text-gray-600 hover:text-blue-600 text-3xl transition">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-blue-600 text-3xl transition">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-blue-600 text-3xl transition">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-blue-600 text-3xl transition">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-blue-600 text-3xl transition">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</section>

<script>
function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  event.target.reset();
}
</script>

`;
}