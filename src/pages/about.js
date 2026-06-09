export default function About() {
  // Import team member images
  const manikantaImg = new URL('../assets/manikanta.jpeg', import.meta.url).href;
  const vishnuImg = new URL('../assets/VISHNU.png', import.meta.url).href;
  const hemanthImg = new URL('../assets/hemanth.jpeg', import.meta.url).href;
  const nawazImg = new URL('../assets/nawaz.jpeg', import.meta.url).href;
  const sairishiImg = new URL('../assets/sairishi.jpg', import.meta.url).href;
  const chandhanaImg = new URL('../assets/chandhana.jpeg', import.meta.url).href;
  const nageshwariImg = new URL('../assets/nageshwari.jpeg', import.meta.url).href;
  const arunImg = new URL('../assets/arun.jpeg', import.meta.url).href;
  const chandupriyaImg = new URL('../assets/chandupriya.jpeg', import.meta.url).href;
  const stalinImg = new URL('../assets/stalin.jpeg', import.meta.url).href;
  const deepakImg = new URL('../assets/deepak.jpeg', import.meta.url).href;
  const saitejaImg = new URL('../assets/saiteja.jpeg', import.meta.url).href;
  const ojaswithaImg = new URL('../assets/ojaswitha.jpeg', import.meta.url).href;

  return `

<!-- About Hero -->
<section class="pt-32 pb-20 px-6">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-6xl lg:text-7xl font-black mb-8">
      About <span class="gradient-text">AAMBLV</span>
    </h1>
    <p class="text-xl text-gray-600 max-w-2xl">
      We are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
    </p>
  </div>
</section>

<!-- Mission & Vision -->
<section class="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div class="max-w-5xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          To empower businesses of all sizes with innovative digital solutions that drive growth, efficiency, and competitive advantage in the digital age.
        </p>
      </div>
      <div>
        <h2 class="text-3xl font-bold mb-6">Our Vision</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          To be the leading digital transformation partner, recognized for our excellence, innovation, and commitment to delivering exceptional results for our clients.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Core Values -->
<section class="py-20 px-6">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-4xl font-black mb-16 text-center">Our Core Values</h2>
    <div class="grid md:grid-cols-4 gap-8">
      <div class="glass p-8 rounded-2xl">
        <div class="text-4xl mb-4">💡</div>
        <h3 class="text-xl font-bold mb-3">Innovation</h3>
        <p class="text-gray-600">Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.</p>
      </div>
      <div class="glass p-8 rounded-2xl">
        <div class="text-4xl mb-4">🤝</div>
        <h3 class="text-xl font-bold mb-3">Collaboration</h3>
        <p class="text-gray-600">Working closely with clients to understand their needs and deliver tailored solutions.</p>
      </div>
      <div class="glass p-8 rounded-2xl">
        <div class="text-4xl mb-4">✨</div>
        <h3 class="text-xl font-bold mb-3">Excellence</h3>
        <p class="text-gray-600">Commitment to quality and attention to detail in every project we undertake.</p>
      </div>
      <div class="glass p-8 rounded-2xl">
        <div class="text-4xl mb-4">🚀</div>
        <h3 class="text-xl font-bold mb-3">Growth</h3>
        <p class="text-gray-600">Dedicated to continuous learning and helping our clients achieve their business goals.</p>
      </div>
    </div>
  </div>
</section>

<!-- Team -->
<section class="py-20 px-6 bg-gray-50">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-black mb-16 text-center">Our Team</h2>
    
    <!-- CEO Section -->
    <div class="mb-20">
      <h3 class="text-3xl font-bold text-center mb-12 text-blue-600">Leadership</h3>
      <div class="flex justify-center">
        <div class="text-center max-w-xs">
          <div class="relative mb-6 group">
            <div class="w-full max-w-xs aspect-[2/3] rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden mx-auto">
              <img src="${manikantaImg}" alt="Amit Sharma" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-5 right-5 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">CEO</div>
          </div>
          <h3 class="text-2xl font-bold mb-2">Garrepelly Manikanta</h3>
          <p class="text-blue-600 font-semibold text-lg mb-3">CEO & Managing Director</p>
          <p class="text-gray-600">15+ years of experience in digital transformation and enterprise solutions.</p>
        </div>
      </div>
    </div>

    <!-- Leadership Team Section -->
    <div class="mb-20">
      <h3 class="text-3xl font-bold text-center mb-12 text-purple-600"></h3>
      <div class="grid md:grid-cols-3 grid-rows-2 gap-12">
        
        <!-- Team Lead -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-40 md:w-56 mx-auto aspect-[2/3] rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center overflow-hidden">
              <img src="${vishnuImg}" alt="Vishnu Tekumatla" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold">LEAD</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Vishnu Tekumatla</h3>
          <p class="text-purple-600 font-semibold text-sm mb-2">Software Engineer Team Lead</p>
          <p class="text-gray-600 text-xs">Expert in scalable application design.</p>
        </div>

        <!-- Web Developer 1 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-40 md:w-56 mx-auto aspect-[2/3] rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center overflow-hidden">
              <img src="${hemanthImg}" alt="Hemanth Billa" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold">DEV</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Hemanth Billa</h3>
          <p class="text-indigo-600 font-semibold text-sm mb-2">Full-Stack Developer</p>
          <p class="text-gray-600 text-xs">Passionate about creating beautiful and intuitive user experiences.</p>
        </div>

        <!-- Web Developer 2 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-40 md:w-56 mx-auto aspect-[2/3] rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
              <img src="${nawazImg}" alt="Shah Nawaz" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">DEV</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Shah Nawaz</h3>
          <p class="text-green-600 font-semibold text-sm mb-2">Full-Stack Developer</p>
          <p class="text-gray-600 text-xs">Expert in modern technologies.</p>
        </div>

                <!-- Web Developer 2 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-40 md:w-56 mx-auto aspect-[2/3] rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
              <img src="${sairishiImg}" alt="Sairishi Neelam" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">DEV</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Sairishi Neelam</h3>
          <p class="text-green-600 font-semibold text-sm mb-2">Web Developer</p>
          <p class="text-gray-600 text-xs">Expert in web technologies.</p>
        </div>

                <!-- Web Developer 2 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-40 md:w-56 mx-auto aspect-[2/3] rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
              <img src="${chandhanaImg}" alt="Chandana" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">HR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Chandana</h3>
          <p class="text-green-600 font-semibold text-sm mb-2">Human Resources</p>
         
        </div>

          <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-40 md:w-56 mx-auto aspect-[2/3] rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
              <img src="${nageshwariImg}" alt="Nageshwari" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">HR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Nageshwari</h3>
          <p class="text-green-600 font-semibold text-sm mb-2">Human Resources</p>
         
        </div>


      </div>
    </div>

    <!-- Junior Developers Section -->
    <div>
      <h3 class="text-3xl font-bold text-center mb-12 text-gray-700">Junior Development Team</h3>
      <div class="grid md:grid-cols-4 gap-8">
        
        <!-- Junior Developer 1 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-full aspect-[2/3] rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center overflow-hidden">
              <img src="${arunImg}" alt="Arun Kore" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold">JR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Arun Kore</h3>
          <p class="text-pink-600 font-semibold text-sm mb-2">Junior Developer</p>
          <p class="text-gray-600 text-xs">Skilled in JavaScript and modern frontend frameworks.</p>
        </div>

        <!-- Junior Developer 2 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-full aspect-[2/3] rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden">
              <img src="${chandupriyaImg}" alt="Chandupriya" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold">JR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Chandupriya</h3>
          <p class="text-orange-600 font-semibold text-sm mb-2">Junior Developer</p>
          <p class="text-gray-600 text-xs">Specializing in backend development and databases.</p>
        </div>

        <!-- Junior Developer 3 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-full aspect-[2/3] rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center overflow-hidden">
              <img src="${stalinImg}" alt="Stalin" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold">JR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Stalin</h3>
          <p class="text-teal-600 font-semibold text-sm mb-2">Junior Developer</p>
          <p class="text-gray-600 text-xs">Passionate about web development and problem-solving.</p>
        </div>

        <!-- Junior Developer 4 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-full aspect-[2/3] rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center overflow-hidden">
              <img src="${deepakImg}" alt="Deepak" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold">JR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Deepak</h3>
          <p class="text-red-600 font-semibold text-sm mb-2">Junior Developer</p>
          <p class="text-gray-600 text-xs">Skilled in API development and system integration.</p>
        </div>

        <!-- Junior Developer 5 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-full aspect-[2/3] rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center overflow-hidden">
              <img src="${saitejaImg}" alt="Saiteja" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-cyan-600 text-white px-4 py-1 rounded-full text-xs font-bold">JR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Saiteja</h3>
          <p class="text-cyan-600 font-semibold text-sm mb-2">Junior Developer</p>
          <p class="text-gray-600 text-xs">Expert in UI/UX implementation and styling.</p>
        </div>

        <!-- Junior Developer 6 -->
        <div class="text-center">
          <div class="relative mb-6 group">
            <div class="w-full aspect-[2/3] rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center overflow-hidden">
              <img src="${ojaswithaImg}" alt="Ojaswitha" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-3 right-3 bg-yellow-600 text-white px-4 py-1 rounded-full text-xs font-bold">JR</div>
          </div>
          <h3 class="text-lg font-bold mb-1">Ojaswitha</h3>
          <p class="text-yellow-600 font-semibold text-sm mb-2">Junior Developer</p>
          <p class="text-gray-600 text-xs">Focused on quality assurance and testing.</p>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- Stats -->
<section class="py-20 px-6">
  <div class="max-w-5xl mx-auto">
    <div class="grid md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="text-5xl font-black text-blue-600 mb-2">150+</div>
        <p class="text-gray-600 font-medium">Projects Delivered</p>
      </div>
      <div class="text-center">
        <div class="text-5xl font-black text-blue-600 mb-2">98%</div>
        <p class="text-gray-600 font-medium">Client Satisfaction</p>
      </div>
      <div class="text-center">
        <div class="text-5xl font-black text-blue-600 mb-2">50+</div>
        <p class="text-gray-600 font-medium">Team Members</p>
      </div>
      <div class="text-center">
        <div class="text-5xl font-black text-blue-600 mb-2">10+</div>
        <p class="text-gray-600 font-medium">Years in Industry</p>
      </div>
    </div>
  </div>
</section>

`;
}