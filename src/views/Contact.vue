<template>
    <Navbar solid />
  
    <!-- Hero -->
    <div class="py-20 bg-linear-to-r to-[#53073e] from-[#eb81cd] w-full">
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
                <img src="/src/assets/images/logo.svg" alt="" class="w-10">
            </div>
            <div>
                <p class="font-semibold">
                      General Enquiries
                </p>
                <a href="" class="text-[#eb81cd]">info@covenantschools.com</a>
            </div>
          </div>

          <div class="flex gap-3 items-center">
            <div>
                <img src="/src/assets/images/logo.svg" alt="" class="w-10">
            </div>
            <div class="mt-2">
                <p class="font-semibold">
                      Admissions
                </p>
                <a href="" class="text-[#eb81cd]">admissions@covenantschools.com</a>
            </div>
          </div>
          <div class="flex gap-3 items-center">
            <div>
                <img src="/src/assets/images/logo.svg" alt="" class="w-10">
            </div>
            <div class="mt-2">
                <p class="font-semibold">
                      Office Hours
                </p>
                <a href="" class="text-[#eb81cd]">Monday – Friday: 8:00am – 4:00pm</a>
            </div>
          </div>
          </div>
        </div>
  
        <!-- Right: form card -->
        <div class="lg:w-2/3 w-full border border-gray-200 shadow-md rounded-[20px] p-6 lg:p-8">
          <h1 class="font-semibold text-lg text-[#53073e] mb-5">Send Us a Message</h1>
  
          <form class="flex flex-col gap-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label class="text-[12px] font-semibold text-gray-700">FIRST NAME</label>
                <input
                  type="text"
                  placeholder="First name"
                  class="w-full border border-gray-300 focus:outline-none focus:ring-1
                         focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-[#f7ebf3] mt-1"
                />
              </div>
              <div class="flex flex-col">
                <label class="text-[12px] font-semibold text-gray-700">LAST NAME</label>
                <input
                  type="text"
                  placeholder="Last name"
                  class="w-full border border-gray-300 focus:outline-none focus:ring-1
                         focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-[#f7ebf3] mt-1"
                />
              </div>
            </div>
  
            <div class="flex flex-col">
              <label class="text-[12px] font-semibold text-gray-700">PHONE NUMBER</label>
              <input
                type="text"
                placeholder="+234 000 000 0000"
                class="w-full border border-gray-300 focus:outline-none focus:ring-1
                       focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-[#f7ebf3] mt-1"
              />
            </div>
  
            <div class="flex flex-col">
              <label class="text-[12px] font-semibold text-gray-700">EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="your@email.com"
                class="w-full border border-gray-300 focus:outline-none focus:ring-1
                       focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-[#f7ebf3] mt-1"
              />
            </div>
  
            <div class="flex flex-col">
              <label class="text-[12px] font-semibold text-gray-700">SCHOOL</label>
              <select
                class="w-full border border-gray-300 focus:outline-none focus:ring-1
                       focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-[#f7ebf3] mt-1"
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
                       focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-[#f7ebf3] mt-1 resize-"
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
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue';
  </script>