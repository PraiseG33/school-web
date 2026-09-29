<template>
  <div>
  <Navbar solid />

  <!-- Hero -->
  <div class="py-20 bg-linear-to-r to-[#53073e] from-[#eb81cd] pt-40 w-full">
    <div class="px-6 lg:px-24 max-w-6xl mx-auto">
      <div class="flex gap-1 font-semibold text-sm">
        <a href="/" class="text-white/80 hover:text-white transition">Home</a>
        <p class="text-white">&gt; Contact</p>
      </div>

      <h2 class="font-display pt-5 text-4xl lg:text-6xl font-bold text-white leading-tight">
        <span class="block">WE WOULD LOVE TO</span>
        <span class="block mt-2">HEAR FROM YOU</span>
      </h2>

      <p class="mt-4 text-base font-medium lg:text-[15px] text-white/90 max-w-2xl leading-8">
        Whether you have a question, want to visit a campus or are ready to apply —
        our team is always happy to help.
      </p>
    </div>
  </div>

  <!-- Contact section -->
   <div class="bg-pink-50">
  <div class="py-16 px-6 lg:px-4 max-w-6xl mx-auto">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">

      <!-- Left: intro text -->
      <div class="">
        <h1 class="font-bold text-3xl text-[#53073e]">Get In Touch</h1>
        <p class="mt-3 text-gray-600 leading-7">
          Complete the form and a member of our team will get back to you.
          For urgent enquiries, please call us directly.
        </p>
        <div class="mt-4 text-[15px] text-[#53073e]">
          <div class="flex gap-3 items-center">
          <div>
              <i class="fa fa-envelope w-10 text-center text-2xl text-[#eb81cd]"></i>
          </div>
          <div>
              <p class="font-semibold">
                    General Enquiries
              </p>
              <a href="mailto:info@covenantschools.com" class="text-[#eb81cd]">info@covenantschools.com</a>
          </div>
        </div>

        <div class="flex gap-3 items-center">
          <div>
              <i class="fa fa-graduation-cap w-10 text-center text-2xl text-[#eb81cd]"></i>
          </div>
          <div class="mt-2">
              <p class="font-semibold">
                    Admissions
              </p>
              <a href="mailto:admissions@covenantschools.com" class="text-[#eb81cd]">admissions@covenantschools.com</a>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <div>
              <i class="fa fa-clock-o w-10 text-center text-2xl text-[#eb81cd]"></i>
          </div>
          <div class="mt-2">
              <p class="font-semibold">
                    Office Hours
              </p>
              <p class="text-[#eb81cd]">Monday – Friday: 8:00am – 4:00pm</p>
          </div>
        </div>
        </div>
      </div>

      <!-- Right: form card -->
      <div class="lg:w-2/3 w-full border border-gray-200 shadow-md rounded-[20px] bg-white p-6 lg:p-8">
        <h1 class="font-semibold text-lg text-[#53073e] mb-5">Send Us a Message</h1>

        <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-2  gap-4">
            <div class="flex flex-col">
              <label class="text-[12px] font-semibold text-gray-700">FIRST NAME</label>
              <input
                type="text"
                placeholder="First name"
                class="w-full border border-gray-300 focus:outline-none focus:ring-1
                       focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-[12px] font-semibold text-gray-700">LAST NAME</label>
              <input
                type="text"
                placeholder="Last name"
                class="w-full border border-gray-300 focus:outline-none focus:ring-1
                       focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label class="text-[12px] font-semibold text-gray-700">PHONE NUMBER</label>
            <input
              type="text"
              placeholder="+234 000 000 0000"
              class="w-full border border-gray-300 focus:outline-none focus:ring-1
                     focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-[12px] font-semibold text-gray-700">EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="your@email.com"
              class="w-full border border-gray-300 focus:outline-none focus:ring-1
                     focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
            />
          </div>

          <div class="flex flex-col">
            <label class="text-[12px] font-semibold text-gray-700">SCHOOL</label>
            <select
              class="w-full border border-gray-300 focus:outline-none focus:ring-1
                     focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
            >
              <option value="" disabled selected hidden>Which school are you contacting</option>
              <option>Primary School</option>
              <option>Secondary School</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label class="text-[12px] font-semibold text-gray-700">MESSAGE</label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              class="w-full border border-gray-300 focus:outline-none focus:ring-1
                     focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="mt-2 w-full sm:w-fit self-end bg-linear-to-r to-[#53073e] from-[#eb81cd]
                   text-white font-semibold px-8 py-2.5 rounded-[10px] hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  <section>
    <div class="text-center px-5 py-14 lg:px-20">
    <h1 class="font-bold text-3xl text-[#6b064e]">Find Us</h1>

    <div class="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-8 text-start bg-white rounded-xl max-w-6xl mx-auto shadow-lg p-4 lg:p-6">

<!-- Left: tabs + content -->
<div class="w-full lg:w-3/5 min-w-0 lg:min-h-62.5">
    <!-- Tabs -->
    <div class="flex gap-2 overflow-x-auto pb-2">
        <button
            v-for="(faq, index) in faqs"
            :key="faq.question"
            type="button"
            class="shrink-0 rounded-md px-4 py-2 text-[16px] tracking-wider transition-colors"
            :class="activeFaq === index
                ? 'bg-pink-50 text-[#95357a] font-semibold'
                : 'text-gray-600 font-semibold hover:bg-gray-50'"
            @click="activeFaq = index"
        >
            {{ faq.question }}
        </button>
    </div>

    <!-- Content -->
    <ul class="mt-6 list-[square] pl-5 space-y-3 text-sm tracking-wide text-gray-800 leading-relaxed">
        <li v-for="point in faqs[activeFaq].answer" :key="point">
            {{ point }}
        </li>
    </ul>
</div>

<!-- Right: contact card -->
<div class="w-full lg:w-2/5 border border-gray-200 rounded-lg p-5 space-y-5">
    <h1 class="font-bold text-lg text-[#6b064e]">Covenant Royal College</h1>

    <div class="border-b border-gray-300 flex items-center gap-3 pb-2">
        <!-- <img src="" alt="Address" class="w-6 h-6 shrink-0 mt-1"> -->
        <i class="fa fa-map-marker w-6 text-center text-xl text-red-400 mt-3"></i>
        <div class="">
            <h2 class="font-bold text-[11px] text-[#95357a] tracking-widest">ADDRESS</h2>
            <p class="text-sm text-gray-600 font-semibold">#4 Okelue Street, opposite Wema Bank, Nnebisi Road, Asaba, Delta State, Nigeria.</p>
        </div>
    </div>

    <div class="border-b border-gray-300 flex items-center gap-3 pb-2">
        <!-- <img src="" alt="Phone" class="w-6 h-6 shrink-0 mt-1"> -->
        <i class="fa fa-phone w-6 text-center text-xl text-red-400 mt-3"></i>
        <div class="w-full">
            <h2 class="font-bold text-[11px] text-[#95357a] tracking-widest">PHONE</h2>
            <a class="text-sm text-gray-600 font-semibold" href="tel:+2348033705589">08033705589</a>
            <span class="text-sm text-gray-600 font-semibold"> · </span>
            <a class="text-sm text-gray-600 font-semibold" href="tel:+2348037982952">08037982952</a>
        </div>
    </div>

    <div class="border-b border-gray-300 flex items-center gap-3 pb-2">
        <!-- <img src="" alt="Email" class="w-6 h-6 shrink-0 mt-1"> -->
        <i class="fa fa-envelope w-6 text-center text-xl text-red-400 mt-3"></i>
        <div class=" w-full">
            <h2 class="font-bold text-[11px] text-[#95357a] tracking-widest">EMAIL</h2>
            <a class="text-sm text-gray-600 font-semibold break-all" href="mailto:info@covenantschools.com">info@covenantschools.com</a>
        </div>
    </div>

    <button type="button" class="block mr-auto bg-linear-to-r to-[#53073e] from-[#eb81cd] hover:bg-[#942173] 
    text-white hover:opacity-90 font-bold p-2 rounded-[5px] hover:text-white transition w-full lg:w-fit 
    text-[15px]">Directions</button>
</div>
</div>
   </div>
  </section>
  <Footer />
</div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue'

const activeFaq = ref(0)

const faqs = [
    {
        question: 'Primary School',
        answer: [
            '#4 Okelue Street, opposite Wema Bank, Nnebisi Road, Asaba, Delta State, Nigeria.',
            'Your child can stay on one continuous learning journey with us, right through to Secondary school.',
        ],
    },
    {
        question: 'Secondary School',
        answer: [
            'Classes run from 8:00 AM to 3:00 PM, Monday to Friday.',
            'Extended aftercare is available for parents who need it.',
        ],
    },
    // ...same pattern for the rest
]

// TODO: wire this up to a real email/backend service. For now this just
// stops the browser's default full-page-reload form submission.
const handleSubmit = () => {
    console.log('Contact form submitted')
}
</script>