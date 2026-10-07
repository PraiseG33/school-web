<template>
  <Navbar solid/>
  <div class="py-20 bg-linear-to-r to-[#53073e] from-[#eb81cd] pt-40 w-full">
  <div class="px-6 lg:px-24 max-w-6xl mx-auto">
    <div class="flex gap-1 font-semibold text-sm">
      <a href="/" class="text-white/80 hover:text-white transition">Home</a>
      <a href="" class="text-white/80 hover:text-white transition">&gt; Admission</a>
      <p class="text-white">&gt; Apply</p>
    </div>

    <h2 class="font-display pt-5 text-4xl lg:text-6xl font-bold text-white leading-tight">
      <span class="block">APPLY ONLINE</span>
    </h2>

    <p class="mt-4 text-base font-medium lg:text-[15px] text-white/90 max-w-2xl leading-8">
      Whether you have a question, want to visit a campus or are ready to apply —
      our team is always happy to help.
    </p>
  </div>
</div>

<div class="py-16 px-6 lg:px-4 max-w-6xl mx-auto">
  <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">
  <div>
      <div class="">
          <h1 class="font-bold text-3xl text-[#53073e]">Start Your Application</h1>
          <p class="mt-3 text-gray-600 leading-7">
               Complete the online application form and make your payment of ₦15,000 via bank transfer to one of the 
                accounts below. Your application will be processed upon confirmation of payment.
         </p>
      </div>
      <div class="py-5">
          <h2 class="text-[#53073e] font-semibold text-[14px]">PAYMENT DETAILS</h2>
          <div>
              <div class="flex items-center justify-between border-b border-gray-300 p-1">
                  <p class="text-gray-600 font-semibold">Bank </p>
                  <p class="text-[#53073e] font-semibold">Sterling Bank</p>
              </div>
              <div class="flex items-center justify-between border-b border-gray-300 p-1">
                  <p class="text-gray-600 font-semibold">Account Name </p>
                  <p class="text-[#53073e] font-semibold">Covenant Schools</p>
              </div>
              <div class="flex items-center justify-between p-1">
                  <p class="text-gray-600 font-semibold">Account Number</p>
                  <p class="text-[#53073e] font-semibold">868227340</p>
              </div>
          </div>
      </div>
  </div>

  <div class="lg:w-2/3 w-full border border-gray-200 shadow-md rounded-[20px] p-6 lg:p-8">
      <h1 class="font-semibold text-lg text-[#53073e] mb-5">APPLICATION FORM</h1>

      <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> -->
          <div class="flex flex-col">
            <label class="text-[12px] font-semibold text-gray-700">STUDENT FIRST NAME</label>
            <input
              type="text"
              placeholder="First name"
              class="w-full border border-gray-300 focus:outline-none focus:ring-1
                     focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-[12px] font-semibold text-gray-700">STUDENT LAST NAME</label>
            <input
              type="text"
              placeholder="Last name"
              class="w-full border border-gray-300 focus:outline-none focus:ring-1
                     focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
            />
          </div>

        <div class="flex flex-col">
          <label class="text-[12px] font-semibold text-gray-700">PHONE NUMBER</label>
          <input
            type="tel"
            placeholder="+234 000 000 0000"
            class="w-full border border-gray-300 focus:outline-none focus:ring-1
                   focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
          />
        </div>

        
        <div class="flex flex-col">
          <label class="text-[12px] font-semibold text-gray-700">GENDER</label>
          <select
            class="w-full border border-gray-300 focus:outline-none focus:ring-1
                   focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
          >
            <option value="" disabled selected hidden>Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div class="flex flex-col">
          <label class="text-[12px] font-semibold text-gray-700">CLASS APPLYING FOR</label>
          <select
            class="w-full border border-gray-300 focus:outline-none focus:ring-1
                   focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
          >
            <option value="" disabled selected hidden>Select class group</option>
            <option>Creche</option>
            <option>Kindergaten 1</option>
            <option>Kindergaten 2</option>
            <option>Foundation 1</option>
            <option>Foundation 2</option>
            <option>Grade 1</option>
            <option>Grade 2</option>
            <option>Grade 3</option>
            <option>Grade 4</option>
            <option>Grade 5</option>
            <option>JSS 1</option>
            <option>JSS 2</option>
            <option>JSS 3</option>
            <option>SSS 1</option>
            <option>SSS 2</option>
          </select>
        </div>

        <div class="flex flex-col">
          <label class="text-[12px] font-semibold text-gray-700">SCHOOL OF APPLICATION</label>
          <select
            class="w-full border border-gray-300 focus:outline-none focus:ring-1
                   focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1"
          >
            <option value="" disabled selected hidden>Select school</option>
            <option>Covenant International School</option>
            <option>Covenant Royal College</option>
          </select>
        </div>

        <div class="flex flex-col">
          <label class="text-[12px] font-semibold text-gray-700">PARENT / GUARDIAN NAME</label>
          <input type="text" placeholder="Full name" class="w-full border border-gray-300 focus:outline-none focus:ring-1
          focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1">
        </div>

        <div class="flex flex-col">
          <label class="text-[12px] font-semibold text-gray-700">PARENT EMAIL</label>
          <input type="text" placeholder="parent@email.com" class="w-full border border-gray-300 focus:outline-none focus:ring-1
          focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1">
        </div>

        <div class="flex flex-col">
          <label class="text-[12px] font-semibold text-gray-700">PARENT PHONE NUMBER</label>
          <input type="text" placeholder="+234 000 000 0000" class="w-full border border-gray-300 focus:outline-none focus:ring-1
          focus:ring-[#6b064e] rounded-[10px] p-2.5 bg-gray-100 mt-1">
        </div>


        <button
          type="submit"
          class="mt-2 w-full sm:w-fit self-end bg-linear-to-r to-[#53073e] from-[#eb81cd]
                 text-white font-semibold px-8 py-2.5 rounded-[10px] hover:opacity-90 transition"
        >
          Submit Application
        </button>
      </form>
      <p class="text-center text-[12px] mt-3 text-gray-600">
          After submitting, our admissions team will contact you with next steps and 
          payment confirmation instructions.
      </p>
    </div>
  <div>
  </div>
</div>
</div>

<Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const handleSubmit = () => {
  console.log('Application form submitted')
}
</script>