
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


    <!-- Rich Contact Content (form removed) -->
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">

        <!-- Left: Contact Details & CTA -->
        <div class="p-8 rounded-2xl bg-white shadow-md">
          <h2 class="text-2xl font-bold mb-4">Contact Details</h2>
          <p class="text-gray-600 mb-4">Prefer to reach out directly? Use the details below to call, email, or visit our office.</p>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold">Email</h4>
              <a href="mailto:aamblvtech@gmail.com" class="text-blue-600">aamblvtech@gmail.com</a>
            </div>
            <div>
              <h4 class="font-semibold">Phone</h4>
              <a href="tel:+919542303742" class="text-blue-600">+91 95423 03742</a>
            </div>
            <div>
              <h4 class="font-semibold">Address</h4>
              <p class="text-gray-600">Hunter Rd, beside PADMAVATHI GARDENS,<br>Ramannapet, Warangal, India</p>
            </div>
            <div>
              <h4 class="font-semibold">Business Hours</h4>
              <p class="text-gray-600">Mon - Fri: 10:00 AM — 6:00 PM<br>Sat: 10:00 AM — 5:00 PM</p>
            </div>
          </div>

          <div class="mt-8">
            <a href="mailto:aamblvtech@gmail.com" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">Schedule Consultation</a>
          </div>
        </div>


        <!-- Right: Map / Location visual -->
        <div class="p-0 rounded-2xl overflow-hidden bg-white shadow-md">
          <iframe
            class="w-full h-96 border-0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.0342966688727!2d79.58177347494917!3d17.977141283014124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334578dd7cde7b%3A0xc0b0bc37f7cd3bb5!2sAamblv%20technologies%20private%20limited!5e0!3m2!1sen!2sin!4v1780991628156!5m2!1sen!2sin"
          ></iframe>
        </div>

      </div>

      <!-- FAQ / Quick Info -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-xl font-bold mb-4">Quick Answers</h3>
        <div class="grid md:grid-cols-3 gap-6 text-gray-600">
          <div>
            <h4 class="font-semibold mb-2">Typical Project Length</h4>
            <p>4–8 weeks for MVPs; 4–6 months for full products.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Pricing Model</h4>
            <p>Fixed-price or retainer — whichever fits your project needs.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Industries</h4>
            <p>Healthcare, Education, Startups, and SMBs.</p>
          </div>
        </div>
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

`;
}
