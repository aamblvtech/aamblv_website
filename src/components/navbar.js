export default function Navbar() {
  // Import logo
  const logoImg = new URL('../assets/logo.png', import.meta.url).href;

  return `

<header
class="
relative
fixed
top-0
left-0
right-0
z-50
bg-white/90
backdrop-blur-xl
border-b
border-gray-100
">

<div
class="
max-w-7xl
mx-auto
px-6
">

<div
class="
h-20
flex
items-center
justify-between
">

<a
href="/"
class="
flex
items-center
gap-3
">

<div
class="
w-10
h-10
rounded-xl

flex
items-center
justify-center
text-white
font-bold
">
<img src="${logoImg}" alt="AAMBLV" class="w-full h-full object-cover" />
</div>

<div>

<h2
class="
font-black
text-lg
leading-none
">
AAMBLV
</h2>

<p
class="
text-xs
text-gray-500
">
Technologies Pvt Ltd
</p>

</div>

</a>

<input id="nav-toggle" type="checkbox" class="peer hidden" />

<nav
class="
hidden
lg:flex
items-center
gap-8
font-medium
">

<a href="/">Home</a>

<a href="/about">
About
</a>

<a href="/services">
Services
</a>

<a href="/portfolio">
Portfolio
</a>

<a href="/careers">
Careers
</a>

<a href="/contact">
Contact
</a>

</nav>

<label for="nav-toggle" class="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 text-gray-700 cursor-pointer">
  <span class="text-2xl">☰</span>
</label>

<div class="peer-checked:block hidden absolute inset-x-6 top-[80px] bg-white border border-gray-200 rounded-3xl p-6 shadow-xl lg:hidden">
  <div class="flex flex-col gap-4 text-base font-medium">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/portfolio">Portfolio</a>
    <a href="/careers">Careers</a>
    <a href="/contact">Contact</a>
  </div>
</div>

<div class="flex gap-3">

<a
href="/contact"
class="
bg-blue-600
text-white
px-5
py-3
rounded-xl
font-medium
">
Get Quote
</a>

</div>

</div>

</div>

</header>

`;
}