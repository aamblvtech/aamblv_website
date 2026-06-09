export default function Portfolio() {
  return `

<!-- Portfolio Hero -->
<section class="pt-32 pb-20 px-6">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-6xl lg:text-7xl font-black mb-8">
      Our <span class="gradient-text">Portfolio</span>
    </h1>
    <p class="text-xl text-gray-600 max-w-2xl">
      A showcase of our recent projects and the innovative solutions we've built for clients across various industries.
    </p>
  </div>
</section>

<!-- Portfolio Projects -->
<section class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12">
      
      <!-- Project 1 -->
      <div class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
        <div class="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-black">
          SancHaroO
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">SancHaroO Platform</h3>
          <p class="text-gray-600 mb-4">
            Full-featured SancHaroO is a smart bike, auto, and cab booking platform that offers affordable rides with zero commission for captains. Drivers pay only ₹30 per day and enjoy unlimited ride opportunities, helping them maximize earnings while providing reliable transportation to customers.
          </p>
         
          <p class="text-sm text-gray-500 mb-4"></p>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
        <div class="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-4xl font-black">
          Sharada High School
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">About Project Sharada High School</h3>
          <p class="text-gray-600 mb-4">
           Sharada High School Website is a modern, responsive school website developed to provide students, parents, and visitors with easy access to information about academics, admissions, facilities, events, and school activities.
          </p>
          
         
        </div>
      </div>

      <!-- Project 3 -->
      <div class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
        <div class="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl font-black">
          PRP.925(Smart QR Tag)
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">PRP.925(Smart QR Tag)</h3>
          <p class="text-gray-600 mb-4">
            PRP925 is a smart safety platform that uses secure QR-enabled tags to help vehicle owners protect their vehicles, verify ownership, and connect responsibly without sharing personal information.
          </p>
          
          <p class="text-sm text-gray-500 mb-4">50K+ Users</p>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
        <div class="h-64 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-4xl font-black">
          Nice Computers
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Services Provided</h3>
          <p class="text-gray-600 mb-4">
            Discover Exclusive Deals on a
Variety of Products Provides Best Sales and Services.
          </p>
        </div>
      </div>
  </div>
</section>

<!-- CTA -->
<section class="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-4xl font-black mb-6">Ready for Your Next Project?</h2>
    <p class="text-xl mb-8 opacity-90">
      Let's build something amazing together. Contact us to discuss your project.
    </p>
    <a href="/contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
      Start Your Project
    </a>
  </div>
</section>

`;
}