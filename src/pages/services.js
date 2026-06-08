export default function Services() {
  return `

<!-- Services Hero -->
<section class="pt-32 pb-20 px-6">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-6xl lg:text-7xl font-black mb-8">
      Our <span class="gradient-text">Services</span>
    </h1>
    <p class="text-xl text-gray-600 max-w-2xl">
      Comprehensive digital solutions tailored to your business needs and goals.
    </p>
  </div>
</section>

<!-- Services Grid -->
<section class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
      
      <!-- Web Development -->
      <div class="service-card glass p-8 rounded-2xl border border-gray-200">
        <div class="text-5xl mb-6">🌐</div>
        <h3 class="text-2xl font-bold mb-4">Web Development</h3>
        <p class="text-gray-600 mb-6">
          Custom web applications built with modern frameworks and technologies. From responsive websites to complex web platforms, we deliver scalable solutions.
        </p>
        <ul class="text-gray-600 space-y-2">
          <li>✓ React, Vue, Angular development</li>
          <li>✓ Full-stack applications</li>
          <li>✓ PWA & Progressive Enhancement</li>
          <li>✓ Performance optimization</li>
        </ul>
      </div>

      <!-- Mobile Development -->
      <div class="service-card glass p-8 rounded-2xl border border-gray-200">
        <div class="text-5xl mb-6">📱</div>
        <h3 class="text-2xl font-bold mb-4">Mobile Development</h3>
        <p class="text-gray-600 mb-6">
          Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with powerful backend integration.
        </p>
        <ul class="text-gray-600 space-y-2">
          <li>✓ iOS & Android development</li>
          <li>✓ React Native & Flutter</li>
          <li>✓ App Store optimization</li>
          <li>✓ Real-time synchronization</li>
        </ul>
      </div>

      <!-- Cloud Solutions -->
      <div class="service-card glass p-8 rounded-2xl border border-gray-200">
        <div class="text-5xl mb-6">☁️</div>
        <h3 class="text-2xl font-bold mb-4">Cloud Solutions</h3>
        <p class="text-gray-600 mb-6">
          Scalable cloud infrastructure and migration services. Optimize costs and improve reliability with our cloud expertise.
        </p>
        <ul class="text-gray-600 space-y-2">
          <li>✓ AWS, Azure, GCP expertise</li>
          <li>✓ Cloud migration & optimization</li>
          <li>✓ Serverless architecture</li>
          <li>✓ Infrastructure as Code (IaC)</li>
        </ul>
      </div>

      <!-- AI & Machine Learning -->
      <div class="service-card glass p-8 rounded-2xl border border-gray-200">
        <div class="text-5xl mb-6">🤖</div>
        <h3 class="text-2xl font-bold mb-4">AI & Automation</h3>
        <p class="text-gray-600 mb-6">
          Intelligent automation and AI solutions to streamline operations and enhance decision-making capabilities.
        </p>
        <ul class="text-gray-600 space-y-2">
          <li>✓ Machine learning models</li>
          <li>✓ Process automation</li>
          <li>✓ Natural language processing</li>
          <li>✓ Computer vision solutions</li>
        </ul>
      </div>

      <!-- Branding & Design -->
      <div class="service-card glass p-8 rounded-2xl border border-gray-200">
        <div class="text-5xl mb-6">🎨</div>
        <h3 class="text-2xl font-bold mb-4">Branding & Design</h3>
        <p class="text-gray-600 mb-6">
          Creative branding solutions and stunning UI/UX design that captivates your audience and drives engagement.
        </p>
        <ul class="text-gray-600 space-y-2">
          <li>✓ Logo & brand identity</li>
          <li>✓ UI/UX design</li>
          <li>✓ Brand guidelines</li>
          <li>✓ Design systems</li>
        </ul>
      </div>

      <!-- Digital Transformation -->
      <div class="service-card glass p-8 rounded-2xl border border-gray-200">
        <div class="text-5xl mb-6">🔄</div>
        <h3 class="text-2xl font-bold mb-4">Digital Transformation</h3>
        <p class="text-gray-600 mb-6">
          End-to-end digital transformation consulting to modernize your business processes and operations.
        </p>
        <ul class="text-gray-600 space-y-2">
          <li>✓ Digital strategy consulting</li>
          <li>✓ Legacy system modernization</li>
          <li>✓ Business process optimization</li>
          <li>✓ Change management support</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-4xl font-black mb-6">Ready to Transform Your Business?</h2>
    <p class="text-xl mb-8 opacity-90">
      Let's discuss how our services can help you achieve your goals.
    </p>
    <a href="/contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
      Get Started Today
    </a>
  </div>
</section>

`;
}