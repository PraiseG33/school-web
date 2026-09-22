<template>
    <div>
        <nav 
          class="fixed top-0 left-0 w-full z-50 transition-all bg-white shadow-md text-black">
          <div class="flex items-center justify-between px-5 py-3 lg:justify-center lg:py-2 lg:gap-100">
              <div><img src="/src/assets/images/covenant-logo.jpg" alt="" class=" w-12 lg:w-17"></div>
              <div class="flex items-center gap-10 px-1">
                  <div class="hidden lg:flex gap-8 font-bold">
                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">Home</a>
                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">About</a>
                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">Admission</a>
                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">Academics</a>
                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">Contacts</a>
                  </div>
                  <div class="hidden lg:flex bg-linear-to-r from-[#eb81cd] to-[#942173] rounded-[5px] px-4 py-1 
                  shadow-lg hover:scale-103 hover:to-[#6b064e]">
                      <a href="" class="font-bold text-white transition">Apply</a>
                  </div>
                  <div class="lg:hidden">
                      <i class="fa fa-navicon" style="font-size:25px"></i>
                 </div>
              </div>
          </div>
      </nav>
    </div>
</template>

<script setup>
</script>