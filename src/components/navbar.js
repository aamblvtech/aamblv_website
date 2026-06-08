export default function Navbar() {
  // Import logo
  const logoImg = new URL('../assets/logo.png', import.meta.url).href;

  return `

<header
class="
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

<nav
class="
hidden
md:flex
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