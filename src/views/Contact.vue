<template>
<Navbar solid />
  <div class="py-20 bg-linear-to-r to-[#53073e] from-[#eb81cd] w-auto">
     <div class="px-6 py-11 lg:px-41">
        <div class="flex gap-1 font-semibold">
            <a href="" class="hover:text-white transition">Home</a>
            <p class="text-white">> Contact</p>
        </div>
          <h2 class="font-display pt-5 text-4xl lg:text-6xl font-bold text-white leading-tight">
             <span class="block">
                 WE WOULD LOVE TO
             </span>
             <span class="mt-2">
                 HEAR FROM YOU
             </span>
          </h2>
          <p class="mt-2 text-base font-semibold lg:text-[15px] text-black max-w-3xl leading-9">
              <span>Whether you have a question, want to visit a campus or are ready to apply — our team is always 
                happy to help.</span> 
          </p>
     </div>
  </div>

  <div class="pt-29 px-30">
    <div class="flex flex-col lg:flex-row gap-2 items-center justify-center">
        <div>
            <h1 class="font-bold text-3xl">Get In Touch</h1>
            <p>Complete the form and a member of our team will get back to you. For urgent enquiries, 
                 please call us directly.
            </p>
        </div>

        <div class="border border-gray-200 shadow-md rounded-[20px] p-5">
            <h1>Send Us a Message</h1>
            <div class="flex gap-2 mt-5 items-center">
                <div>
                    <label for="" class="text-[12px] font-semibold">FIRST NAME</label>
                    <input type="text" placeholder="First name" class="border border-gray-300 focus:outline-none 
                    focus:ring-1 focus:ring-[#6b064e] rounded-[10px] p-1.5 bg-[#f7ebf3] mt-1"> 
                </div>
                <div>
                    <label for="" class="text-[12px] font-semibold">LAST NAME</label>
                    <input type="text" placeholder="Last name" class="border border-gray-300 focus:outline-none 
                    focus:ring-1 focus:ring-[#6b064e] rounded-[10px] p-1.5 bg-[#f7ebf3] mt-1"> 
                </div>
            </div>
            <div class="flex flex-col">
                <label for="" class="text-[12px] font-semibold">PHONE NUMBER</label>
                <input type="text"placeholder="+234 000 000 0000" class="border border-gray-300 focus:outline-none 
                focus:ring-1 focus:ring-[#6b064e] rounded-[10px] p-1.5 bg-[#f7ebf3] mt-1">
            </div>

            <div>
                <label for="" class="text-[12px] font-semibold">EMAIL ADDRESS</label>
                <input type="text"placeholder="your@email.com" class="w-full border border-gray-300 focus:outline-none 
                focus:ring-1 focus:ring-[#6b064e] rounded-[10px] p-1.5 bg-[#f7ebf3] mt-1">
            </div>

            <div>
                <label for="" class="text-[12px] font-semibold">SCHOOL</label>
                <select name="" id="" class="w-full border border-gray-300 focus:outline-none 
                focus:ring-1 focus:ring-[#6b064e] rounded-[10px] p-1.5 bg-[#f7ebf3] mt-1">
                    <option value="" disabled selected hidden>Which school are you contacting</option>
                    <option>Primary School</option>
                    <option >Secondary School</option>
                </select>
            </div>

            <div>
                <label for="" class="text-[12px] font-semibold">MESSAGE</label>
                <input type="text" placeholder="How can we help you?" class="w-full border border-gray-300 focus:outline-none 
                focus:ring-1 focus:ring-[#6b064e] rounded-[10px] p-1.5 bg-[#f7ebf3] mt-1">
            </div>
        </div>
    </div>
  </div>

  <div>
    dhdhdhdhdhdh
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>