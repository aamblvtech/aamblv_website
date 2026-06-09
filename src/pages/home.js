export default function Home() { 
  // Import images
  const teamMeetingImg = new URL('../assets/team_meeting.jpg', import.meta.url).href;

  return `

<!-- HERO -->
<section class="min-h-[75vh] flex items-center bg-linear-to-br from-blue-50 via-blue-100/30 to-indigo-50 relative overflow-hidden">

<!-- Decorative shapes -->
<div class="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>

<div class="max-w-7xl mx-auto px-6 py-24 relative z-10">

<div class="grid lg:grid-cols-2 gap-16 items-center">

<div>

<span class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
Aamblv Technologies Pvt Ltd
</span>

<h1 class="text-5xl lg:text-7xl font-black leading-tight">

TRANSFORMING

<span class="text-blue-600">
IDEAS-INTO
</span>

Digital REALITY

</h1>

<p class="mt-8 text-xl text-gray-600 max-w-xl">
Helping businesses scale through web development,
mobile applications, cloud solutions, AI automation,
branding and digital transformation.
</p>

<div class="flex flex-col sm:flex-row gap-4 mt-10">

<button
class="bg-blue-600 text-white px-8 py-4 rounded-xl">
Start Project
</button>

<button
class="border px-8 py-4 rounded-xl">
Explore Services
</button>

</div>

</div>

<div>

<img 
src="${teamMeetingImg}"
class="rounded-3xl shadow-2xl"
>

</div>

</div>

</div>

</section>

<!-- TRUSTED -->

<section class="py-10 border-y bg-white">

<div class="max-w-7xl mx-auto px-6">

<div class="grid grid-cols-2 md:grid-cols-6 gap-8 text-center font-semibold text-gray-400">
<div>Startups</div>
<div>Healthcare</div>
<div>Education</div>

</div>

</div>

</section>

<!-- SERVICES PREVIEW -->

<section class="py-24">

<div class="max-w-7xl mx-auto px-6">

<div class="text-center">

<h2 class="text-5xl font-black">
Our Services
</h2>

<p class="mt-4 text-gray-500">
Comprehensive digital solutions for modern businesses
</p>

</div>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

${[
      {
        title: "Web Development",
        icon: "fa-code"
      },
      {
        title: "Mobile Apps",
        icon: "fa-mobile-screen"
      },
      {
        title: "UI/UX Design",
        icon: "fa-palette"
      },
      {
        title: "Cloud Solutions",
        icon: "fa-cloud"
      },
      {
        title: "AI Automation",
        icon: "fa-brain"
      },
      {
        title: "Digital Marketing",
        icon: "fa-chart-line"
      }
    ].map(service => `

<div class="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

<i class="fa-solid ${service.icon} text-blue-600 text-4xl"></i>

<h3 class="text-2xl font-bold mt-6">
${service.title}
</h3>

<p class="text-gray-600 mt-4">
Custom solutions tailored for business growth.
</p>

<a
href="/services"
class="text-blue-600 mt-6 inline-block">
Learn More →
</a>

</div>

`).join("")}

</div>

<div class="text-center mt-12">

<a
href="/services"
class="bg-blue-600 text-white px-8 py-4 rounded-xl inline-block">
View All Services
</a>

</div>

</div>

</section>

<!-- ABOUT PREVIEW -->

<section class="bg-gray-50 py-24">

<div class="max-w-7xl mx-auto px-6">

<div class="grid lg:grid-cols-2 gap-16 items-center">

<img
src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
class="rounded-3xl shadow-xl"
>

<div>

<h2 class="text-5xl font-black">
Who We Are
</h2>

<p class="text-gray-600 mt-8 leading-relaxed">
Aamblv Technologies Private Limited is a technology
company focused on helping organizations transform
ideas into scalable digital products and business solutions.
</p>

<a
href="/about"
class="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl">
Read More
</a>

</div>

</div>

</div>

</section>

<!-- PORTFOLIO PREVIEW -->

<section class="py-24">

<div class="max-w-7xl mx-auto px-6">

<div class="text-center">

<h2 class="text-5xl font-black">
Featured Work
</h2>

</div>

<div class="grid md:grid-cols-3 gap-8 mt-16">

${[
      {
        title: "SancHaroo(Ride-hailing Platform)",
        url: "sancharoo.in",
        description: "Innovative digital solutions platform",
        logo: new URL('../assets/Sancharoo.jpeg', import.meta.url).href
      },
      {
        title: "PRP.925(Smart QR Tag)",
        url: "prp925tech.in",
        description: "Technology services and consulting",
        logo: new URL('../assets/Prp.925.jpg', import.meta.url).href
      },
      {
        title: "NICE COMPUTERS",
        url: "nicecomputers.com",
        description: "Computing solutions and services",
        logo: new URL('../assets/NICE_COMPUTER.png', import.meta.url).href
      }
    ].map((project, index) => `

<div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

<div class="h-48 ${index === 0 ? 'bg-gradient-to-br from-blue-400 to-indigo-600' : 'bg-white'} flex items-center justify-center overflow-hidden ${index !== 0 ? 'p-8' : ''}">
  <img src="${project.logo}" alt="${project.title}" class="${index === 0 ? 'w-full h-full object-cover hover:scale-105' : 'max-h-full max-w-full object-contain hover:scale-110'} transition-transform duration-300">
</div>

<div class="p-6">

<h3 class="text-xl font-bold">
${project.title}
</h3>

<p class="text-gray-600 mt-3">
${project.description}
</p>

<a
href="https://${project.url}"
target="_blank"
class="text-blue-600 mt-6 inline-block">
Visit Site →
</a>

</div>

</div>

`).join("")}

</div>

<div class="text-center mt-12">

<a
href="/portfolio"
class="bg-blue-600 text-white px-8 py-4 rounded-xl inline-block">
View Portfolio
</a>

</div>

</div>

</section>

<!-- WHY CHOOSE US -->

<section class="bg-blue-600 text-white py-24">

<div class="max-w-7xl mx-auto px-6">

<h2 class="text-center text-5xl font-black mb-16">
Why Choose Us
</h2>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

${[
      "Expert Team",
      "Fast Delivery",
      "Transparent Process",
      "Long Term Support"
    ].map(item => `

<div class="bg-white/10 backdrop-blur p-8 rounded-3xl">

<h3 class="font-bold text-xl">
${item}
</h3>

</div>

`).join("")}

</div>

</div>

</section>

<!-- STATS -->

<section class="py-24">

<div class="max-w-7xl mx-auto px-6">

<div class="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

<div>
<h3 class="text-5xl font-black text-blue-600">250+</h3>
<p>Projects</p>
</div>

<div>
<h3 class="text-5xl font-black text-blue-600">120+</h3>
<p>Clients</p>
</div>

<div>
<h3 class="text-5xl font-black text-blue-600">15+</h3>
<p>Countries</p>
</div>

<div>
<h3 class="text-5xl font-black text-blue-600">99%</h3>
<p>Satisfaction</p>
</div>

</div>

</div>

</section>

<!-- CTA -->

<section class="bg-gray-900 text-white py-24">

<div class="max-w-4xl mx-auto text-center px-6">

<h2 class="text-5xl font-black">
Ready To Build Something Amazing?
</h2>

<p class="mt-6 text-gray-300">
Let's discuss your project and create something impactful.
</p>

<button
class="mt-10 bg-blue-600 px-8 py-4 rounded-xl">
Schedule Consultation
</button>

</div>

</section>

`;
}