<template>

    <div class="font-body">

      <nav 

          class="fixed top-0 left-0 w-full z-50 transition-all"

          :class="isScrolled 

          ? 'bg-white shadow-md text-black' 

          : 'bg-transparent text-white'">

          <div class="relative z-60 flex items-center justify-between px-5 py-3 lg:justify-center lg:py-2 lg:gap-100"

          :class="mobileMenuOpen ? 'shadow-sm' : ''">

              <div><img :src="logo" alt="" class=" w-12 lg:w-17"></div>

              <div class="flex items-center gap-10 px-1">

                  <div class="hidden lg:flex gap-8 font-bold">

                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">Home</a>

                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">About</a>

                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">Admission</a>

                      <a href="" class="hover:text-[#eb81cd] transition hover:scale-103">Academics</a>

                      <a href="/contact" class="hover:text-[#eb81cd] transition hover:scale-103">Contacts</a>

                  </div>

                  <div class="hidden lg:flex bg-linear-to-r from-[#eb81cd] to-[#942173] rounded-[5px] px-4 py-1 

                  shadow-lg hover:scale-103 hover:to-[#6b064e]">

                      <a href="" class="font-bold text-white transition">Apply</a>

                  </div>

                  <div class="lg:hidden">

                    <button type="button" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu" 

                    :aria-expanded="mobileMenuOpen">

                    <i :class="[mobileMenuOpen ? 'fa fa-navicon text-black' : 'fa fa-navicon text-current']" 

                    style="font-size:25px"></i>

                    </button>

                 </div>

              </div>

          </div>

          <!-- Backdrop overlay -->

          <Transition

              enter-active-class="transition-opacity duration-300"

              enter-from-class="opacity-0"

              enter-to-class="opacity-100"

              leave-active-class="transition-opacity duration-300"

              leave-from-class="opacity-100"

              leave-to-class="opacity-0"

          >

              <div

                  v-if="mobileMenuOpen"

                  class="lg:hidden fixed inset-0 bg-black/40 z-40"

                  @click="mobileMenuOpen = false"

              ></div>

          </Transition>

          <!-- Mobile side drawer -->

          <Transition

              enter-active-class="transition-transform duration-300 ease-out"

              enter-from-class="translate-y-full"

              enter-to-class="translate-y-0"

              leave-active-class="transition-transform duration-300 ease-in"

              leave-from-class="translate-y-0"

              leave-to-class="translate-y-full"

          >

              <div

                  v-if="mobileMenuOpen"

                  class="lg:hidden fixed top-0 right-0 h-screen w-full bg-white text-black flex flex-col gap-1 px-3

                   py-8 font-bold shadow-lg z-50">

                 <div class="flex flex-col gap-1 py-11 text-[19px] h-full">

                     <a href="" class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition" 

                     @click="mobileMenuOpen = false">Home</a>

                     <a href="" class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition" @click="mobileMenuOpen = false">About</a>

                     <a href="" class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition" @click="mobileMenuOpen = false">Admission</a>

                     <a href="" class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition" @click="mobileMenuOpen = false">Academics</a>

                     <a href="/contact" class="py-5 px-2 hover:text-[#eb81cd] transition" @click="mobileMenuOpen = false">Contacts</a>

                     <a href=""

                         class="mt-auto inline-block text-center text-[#942173] hover:bg-[#942173] hover:text-white 

                         rounded-[5px] 

                         px-4 py-2 font-semibold border shadow-lg" @click="mobileMenuOpen = false">

                         Apply Now

                     </a>

                 </div>

              </div>

          </Transition>

      </nav>



      <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

          <div class="absolute inset-0 -z-10">

            <img

                v-for="(img, index) in bgImages"

                :key="img"

                :src="img"

                alt="School infrastructure"

                class="absolute inset-0 w-full h-full object-cover object-center scale-110 sm:scale-100 md:object-top 

                lg:object-center transition-opacity duration-1000 ease-in-out"

                :class="index === activeImage ? 'opacity-100' : 'opacity-0'"

              />

             <div class="absolute inset-0 bg-black/30"></div>

       </div>

        <div class="relative z-10 px-6 sm:px-8 lg:px-0 max-w-5xl mx-auto w-full mt-20">

          <h2 class="font-display text-4xl lg:text-6xl font-bold text-white leading-tight">

            <span class="block">WHERE GLOBAL LEARNING<br>AND EDUCATION MEETS</span>

            <span class="block mt-2">

              GREAT MINDS

            </span>

          </h2>

          <p class="mt-8 text-base lg:text-2xl text-gray-100 max-w-3xl leading-9">

              <span>Give your child the perfect learning</span> 

              <span> experience, excellent character,<br>spirit and quality education on our</span>

              <span> conducive learning grounds.</span>

          </p>

          <div class="mt-12">

            <a

              href=""

              class="inline-block px-6 py-4 bg-linear-to-r from-[#95357a] to-blue-00 text-white rounded-lg 

              hover:to-[#6b064e] font-semibold hover:scale-105 transition-all shadow-lg">

              APPLY FOR ADMISSION

            </a>  

          </div>

        </div>

      </section>



      <section>

          <section>

             <div class="flex flex-col p-5 lg:flex-row justify-center gap-20 lg:px-20 mt-25 mb-30 bg-pink-50">

                 <div class="lg:flex-1">

                   <h1 class="text-[12px] font-extrabold text-[#6b064e]">ABOUT US</h1>

                     <div class="leading-8 text-gray-500 font-semibold">

                        <p class="font-bold text-[#95357a]">Covenant International School was established in 2010 with 

                            one mission — to raise children in the image of God while being socially responsible.

                        </p>

                        <p>Covenant International School exists to raise a generation of learners who stand out, not just 

                           academically, but in character, faith, and readiness for the world ahead of them, wherever that 

                           world may take them.

                        </p>

                        <p>Our doors welcome children from their very first years of school right through to secondary 

                            level, offering one continuous path of learning and personal growth.

                        </p>

                   </div>

               </div>

               <div class="lg:flex-1">

                    <video 

                       :src="schoolVideo" 

                       class="w-full h-auto rounded-[20px] p-2"

                       controls>

                    </video>

               </div>

           </div>

       </section>

  </section>



      <!-- ==================== STATS STRIP ==================== -->

      <section class="bg-white">

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-20 py-14 text-center">

              <div v-for="stat in stats" :key="stat.label">

                  <p class="font-display text-4xl lg:text-5xl font-bold text-[#95357a]">{{ stat.value }}</p>

                  <p class="mt-2 text-gray-600 font-semibold text-sm lg:text-base">{{ stat.label }}</p>

              </div>

          </div>

      </section>



  <section>

      <div class="text-center">

          <h1 class="font-extrabold text-[12px] text-[#6b064e]">TESTIMONIALS</h1>

          <p class="text-[35px] font-semibold text-[#95357a]">Parents Comment</p>

          <div class="flex flex-col px-5 lg:flex-row justify-center mb-20 lg:px-20 py-10 gap-5">

              <div class="shadow-md rounded-[10px] p-5 border border-gray-300 hover:border-[#6b064e] transition">

                  <p class="text-start">

                      Covenant has been transformational for my daughter. The teachers genuinely care, 

                      the discipline is firm but loving, and the academic results speak for themselves.

                  </p>

                  <div>

                      <div class="flex items-center mt-4 justify-start gap-2">

                          <div class="w-11 h-11 rounded-full border bg-[#6b064e] text-white flex items-center 

                          justify-center font-semibold">

                            <span>DJ</span>

                          </div>

                          <div class="text-start">

                              <h1 class="font-bold text-[#95357a] text-[15px]">David Joseph</h1>

                              <p class="text-[15px] font-semibold text-gray-600">Parent, Covenant International School</p>

                          </div>

                      </div>

                  </div>

              </div>



              <div class="shadow-md rounded-[10px] p-5 border border-gray-300 hover:border-[#6b064e] transition">

                  <p class="text-start">

                      Covenant has been transformational for my daughter. The teachers genuinely care, 

                      the discipline is firm but loving, and the academic results speak for themselves.

                  </p>

                  <div>

                      <div class="flex items-center mt-4 justify-start gap-2">

                          <div class="w-11 h-11 rounded-full border bg-[#6b064e] text-white flex items-center 

                          justify-center font-semibold">

                            <span>DJ</span>

                          </div>

                          <div class="text-start">

                              <h1 class="font-bold text-[#95357a] text-[15px]">David Joseph</h1>

                              <p class="text-[15px] font-semibold text-gray-600">Parent, Covenant International School</p>

                          </div>

                      </div>

                  </div>

              </div>



              <div class="shadow-md rounded-[10px] p-5 border border-gray-300 hover:border-[#6b064e] transition">

                  <p class="text-start">

                      Covenant has been transformational for my daughter. The teachers genuinely care, 

                      the discipline is firm but loving, and the academic results speak for themselves.

                  </p>

                  <div>

                      <div class="flex items-center mt-4 justify-start gap-2">

                          <div class="w-11 h-11 rounded-full border bg-[#6b064e] text-white flex items-center 

                          justify-center font-semibold">

                            <span>DJ</span>

                          </div>

                          <div class="text-start">

                              <h1 class="font-bold text-[#95357a] text-[15px]">David Joseph</h1>

                              <p class="text-[15px] font-semibold text-gray-600">Parent, Covenant International School</p>

                          </div>

                      </div>

                  </div>

              </div>

          </div>

      </div>

  </section>



  <section>

      <div class="text-center mb-10">

           <h1 class="font-extrabold text-[12px] text-[#6b064e]">GALLERY</h1>

           <p class="text-[35px] font-semibold text-[#95357a]">Life at Covenant Schools</p>

      </div>



      <div

        class="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 p-6 lg:p-15"

        @click.self="activeGallery = null"

      >



          <!-- IMAGE 1 -->

          <div

              class="gallery-card group relative overflow-hidden rounded-lg h-64 lg:h-70 border-2 border-transparent transition-all duration-500"

              :class="activeGallery === 1 ? 'border-[#eb81cd]' : ''"

              @click.stop="selectGallery(1)"

          >

              <img

                  :src="children1"

                  alt=""

                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

                  :class="activeGallery === 1 ? 'scale-110' : 'scale-100'"

              >

              <div

                  class="absolute inset-0 bg-linear-to-t from-[#942173]/40 via-[#eb81cd]/10 to-transparent

                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"

                  :class="activeGallery === 1 ? 'opacity-100' : 'opacity-0'"

              >

                  <p

                      class="text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-500"

                      :class="activeGallery === 1 ? 'translate-y-0' : 'translate-y-3'"

                  >

                      Outdoor play time builds confidence and teamwork.

                  </p>

              </div>

          </div>



          <!-- IMAGE 2 -->

          <div

              class="gallery-card group relative overflow-hidden rounded-lg h-64 lg:h-full lg:row-span-2 border-2 border-transparent transition-all duration-500"

              :class="activeGallery === 2 ? 'border-[#eb81cd]' : ''"

              @click.stop="selectGallery(2)"

          >

              <img

                  :src="children2"

                  alt=""

                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

                  :class="activeGallery === 2 ? 'scale-110' : 'scale-100'"

              >

              <div

                  class="absolute inset-0 bg-linear-to-t from-[#942173]/40 via-[#eb81cd]/10 to-transparent

                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"

                  :class="activeGallery === 2 ? 'opacity-100' : 'opacity-0'"

              >

                  <p

                      class="text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-500"

                      :class="activeGallery === 2 ? 'translate-y-0' : 'translate-y-3'"

                  >

                  Every child gets space to explore and grow.

                  </p>

              </div>

          </div>



          <!-- IMAGE 3 -->

          <div

              class="gallery-card group relative overflow-hidden rounded-lg h-64 lg:h-70 border-2 border-transparent transition-all duration-500"

              :class="activeGallery === 3 ? 'border-[#eb81cd]' : ''"

              @click.stop="selectGallery(3)"

          >

              <img

                  :src="children3"

                  alt=""

                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

                  :class="activeGallery === 3 ? 'scale-110' : 'scale-100'"

              >

              <div

                  class="absolute inset-0 bg-linear-to-t from-[#942173]/40 via-[#eb81cd]/10 to-transparent

                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"

                  :class="activeGallery === 3 ? 'opacity-100' : 'opacity-0'"

              >

                  <p

                      class="text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-500"

                      :class="activeGallery === 3 ? 'translate-y-0' : 'translate-y-3'"

                  >

                      Hands-on learning in the classroom.

                  </p>

              </div>

          </div>



          <!-- IMAGE 4 -->

          <div

              class="gallery-card group relative overflow-hidden rounded-lg h-64 lg:h-70 border-2 border-transparent transition-all duration-500"

              :class="activeGallery === 4 ? 'border-[#eb81cd]' : ''"

              @click.stop="selectGallery(4)"

          >

              <img

                  :src="children4"

                  alt=""

                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

                  :class="activeGallery === 4 ? 'scale-110' : 'scale-100'"

              >

              <div

                  class="absolute inset-0 bg-linear-to-t from-[#942173]/40 via-[#eb81cd]/10 to-transparent

                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"

                  :class="activeGallery === 4 ? 'opacity-100' : 'opacity-0'"

              >

                  <p

                      class="text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-500"

                      :class="activeGallery === 4 ? 'translate-y-0' : 'translate-y-3'"

                  >

                      Friendships that last a lifetime.

                  </p>

              </div>

          </div>



          <!-- IMAGE 5 -->

          <div

              class="gallery-card group relative overflow-hidden rounded-lg h-64 lg:h-70 border-2 border-transparent transition-all duration-500"

              :class="activeGallery === 5 ? 'border-[#eb81cd]' : ''"

              @click.stop="selectGallery(5)"

          >

              <img

                  :src="children5"

                  alt=""

                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

                  :class="activeGallery === 5 ? 'scale-110' : 'scale-100'"

              >

              <div

                  class="absolute inset-0 bg-linear-to-t from-[#942173]/40 via-[#eb81cd]/10 to-transparent

                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"

                  :class="activeGallery === 5 ? 'opacity-100' : 'opacity-0'"

              >

                  <p

                      class="text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-500"

                      :class="activeGallery === 5 ? 'translate-y-0' : 'translate-y-3'"

                  >

                      Celebrating every milestone together.

                  </p>

              </div>

          </div>

      </div>



      <div class="text-center mb-30">

        <a href="" class="px-4 py-2 rounded-[5px] border border-[#95357a] text-[#95357a] font-semibold 

        hover:bg-[#942173] hover:text-white transition">View More →</a>

     </div>

  </section>



  <section>

      <div class="text-center">

          <h1 class="font-extrabold text-[12px] text-[#6b064e]">THE PROCESS</h1>

          <p class="text-[35px] font-semibold text-[#95357a]">One Journey, from Creche to Secondary School</p>

          <div class="mb-5 flex flex-col px-5 lg:flex-row justify-center lg:mb-15 lg:px-20 py-10 gap-5">

              <div class="shadow-md rounded-[10px] p-5 border border-gray-300 hover:border-[#6b064e] transition hover:scale-103">

                  <div class="lg:w-60">

                      <img :src="children3" alt="" class="rounded-xl">

                  </div>

                  <p class="text-start mt-5 text-red-300 font-semibold text-[12px]">

                      AGES 1-2

                  </p>

                  <div>

                      <div class="items-center mt-4 justify-start gap-2">

                          <div class="text-start">

                              <h1 class="font-bold text-[18px] text-[#95357a]">Creche</h1>

                              <p class="text-[14px] font-semibold text-gray-600">Literacy, numeracy and inquiry-based 

                                  learning across the core curriculum.</p>

                          </div>

                      </div>

                      <div class="text-start mt-4">

                          <a href="" class="border border-red-300 rounded-[5px] py-1 px-2 text-[13px] text-red-300 

                          font-semibold hover:bg-[#942173] hover:border-[#95357a] hover:text-white transition">

                          Learn More →</a>

                      </div>

                  </div>

              </div>



              <div class="shadow-md rounded-[10px] p-5 border border-gray-300 hover:border-[#6b064e] transition hover:scale-103">

                  <div class="lg:w-60">

                      <img :src="children3" alt="" class="rounded-xl">

                  </div>

                  <p class="text-start mt-5 text-red-300 font-semibold text-[12px]">

                      AGES 3-5

                  </p>

                  <div>

                      <div class="items-center mt-4 justify-start gap-2">

                          <div class="text-start">

                              <h1 class="font-bold text-[18px] text-[#95357a]">Nursery</h1>

                              <p class="text-[14px] font-semibold text-gray-600">Literacy, numeracy and inquiry-based 

                                  learning across the core curriculum.</p>

                          </div>

                      </div>

                      <div class="text-start mt-4">

                          <a href="" class="border border-red-300 rounded-[5px] py-1 px-2 text-[13px] text-red-300 

                          font-semibold hover:bg-[#942173] hover:border-[#95357a] hover:text-white transition">

                          Learn More →</a>

                      </div>

                  </div>

              </div>



              <div class="shadow-md rounded-[10px] p-5 border border-gray-300 hover:border-[#6b064e] transition hover:scale-103">

                  <div class="lg:w-60">

                      <img :src="children3" alt="" class="rounded-xl">

                  </div>

                  <p class="text-start mt-5 text-red-300 font-semibold text-[12px]">

                      AGES 6-10

                  </p>

                  <div>

                      <div class="items-center mt-4 justify-start gap-2">

                          <div class="text-start">

                              <h1 class="font-bold text-[18px] text-[#95357a]">Primary</h1>

                              <p class="text-[14px] font-semibold text-gray-600">Literacy, numeracy and inquiry-based 

                                  learning across the core curriculum.</p>

                          </div>

                      </div>

                      <div class="text-start mt-4">

                          <a href="" class="border border-red-300 rounded-[5px] py-1 px-2 text-[13px] text-red-300 

                          font-semibold hover:bg-[#942173] hover:border-[#95357a] hover:text-white transition">

                          Learn More →</a>

                      </div>

                  </div>

              </div>



              <div class="shadow-md rounded-[10px] p-5 border border-gray-300 hover:border-[#6b064e] transition hover:scale-103">

                  <div class="lg:w-60">

                      <img :src="children3" alt="" class="rounded-xl">

                  </div>

                  <p class="text-start mt-5 text-red-300 font-semibold text-[12px]">

                      AGES 11-16

                  </p>

                  <div>

                      <div class="items-center mt-4 justify-start gap-2">

                          <div class="text-start">

                              <h1 class="font-bold text-[18px] text-[#95357a]">Secondary</h1>

                              <p class="text-[14px] font-semibold text-gray-600">Literacy, numeracy and inquiry-based 

                                  learning across the core curriculum.</p>

                          </div>

                      </div>

                      <div class="text-start mt-4">

                          <a href="" class="border border-red-300 rounded-[5px] py-1 px-2 text-[13px] text-red-300 

                          font-semibold hover:bg-[#942173] hover:border-[#95357a] hover:text-white transition">

                          Learn More →</a>

                      </div>

                  </div>

              </div>

          </div>

      </div>

  </section>



      <!-- ==================== FAQ ==================== -->

      <section class="bg-pink-50">

          <div class="text-center px-5 py-14 lg:px-20">

              <h1 class="font-extrabold text-[12px] text-[#6b064e]">FAQ</h1>

              <p class="text-[35px] font-semibold text-[#95357a]">Common Questions</p>

              <div class="max-w-3xl mx-auto mt-8 text-start">

                  <div

                      v-for="(faq, index) in faqs"

                      :key="faq.question"

                      class="border-b border-gray-300"

                  >

                      <button

                          type="button"

                          class="w-full flex items-center justify-between gap-4 py-5 text-left"

                          @click="openFaq = openFaq === index ? null : index"

                      >

                          <span class="font-semibold text-[#6b064e]">{{ faq.question }}</span>

                          <span

                              class="shrink-0 text-2xl text-[#95357a] transition-transform"

                              :class="openFaq === index ? 'rotate-45' : ''"

                          >+</span>

                      </button>

                      <p

                          v-if="openFaq === index"

                          class="text-gray-600 font-semibold pb-5 pr-8"

                      >

                          {{ faq.answer }}

                      </p>

                  </div>

              </div>

          </div>

      </section>



  <div class="text-center mb-10">

      <a href="" class="font-semibold border border-[#95357a] text-[#95357a] px-2 py-3 rounded-[5px] 

      hover:bg-[#942173] hover:text-white transition">START APPLICATION</a>

  </div>



  <section>

      <div class="flex-col flex px-5 lg:flex-row gap-2 justify-evenly bg-[#6b064e] mt-25 py-10 pb-20">

          <div>

              <img :src="logo" alt="" class="w-25">

          </div>

          <div class="text-white leading-7">

              <h1 class="font-bold text-[17px]">Contact</h1>

              <p>No.4 Okelue Street, Asaba, Nigeria</p>

              <div class="flex gap-1">

                  <a href="" class="hover:underline">+234 803 798 2952,</a>

                  <a href="" class="hover:underline">+234 803 370 5589</a>

              </div>

          </div>

          <div class="text-white leading-7">

              <h1 class="font-bold text-[17px]">Quick Links</h1>

              <div>

                  <div><a href="" class="hover:underline">Student Life</a></div>

                  <div><a href="" class="hover:underline">Junior Secondary School</a></div>

                  <div><a href="" class="hover:underline">Senior Secondary School</a></div>

                  <div><a href="" class="hover:underline">Student Portal</a></div>

              </div>

          </div>

          <div class="text-white leading-7">

              <h1 class="font-bold text-[17px]">Admissions</h1>

              <div>

                  <div><a href="" class="hover:underline">How to Apply</a></div>

                  <div><a href="" class="hover:underline">Entrance Exams</a></div>

                  <div><a href="" class="hover:underline">Tuition & Scholarships</a></div>

                  <div><a href="" class="hover:underline">Parent's Info</a></div>

              </div>

          </div>

      </div>

  </section>



      </div>

</template>



<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

import logo from '@/assets/images/covenant-logo.jpg'

import schoolImage from '@/assets/images/school.jpg'

import labImage from '@/assets/images/lab-covenant.jpg'

import children1 from '@/assets/images/Children1.jpg'

import children2 from '@/assets/images/Children2.jpg'

import children3 from '@/assets/images/Children3.jpg'

import children4 from '@/assets/images/Children4.jpg'

import children5 from '@/assets/images/Children 5.jpg'

import schoolVideo from '@/assets/images/The Cavemen - Me You I _ Selense Medley (Live Performance) _ Glitch Take Off.mp4'

const isScrolled = ref(false)

const mobileMenuOpen = ref(false)

const handleScroll = () => {

    isScrolled.value = window.scrollY > 50

}



const bgImages = [

    schoolImage,

    labImage

]

const activeImage = ref(0)

const activeGallery = ref(null)

const selectGallery = (index) => {

    activeGallery.value = activeGallery.value === index ? null : index

}

let bgInterval = null

const cycleBackground = () => {

    activeImage.value = (activeImage.value + 1) % bgImages.length

}



onMounted(() => {

    window.addEventListener('scroll', handleScroll)

    bgInterval = setInterval(cycleBackground, 10000)

})

onUnmounted(() => {

    window.removeEventListener('scroll', handleScroll)

    clearInterval(bgInterval)

})



// ---------- Stats strip ----------

const stats = [

    { value: '2010', label: 'Year Founded' },

    { value: '15+', label: 'Years of Excellence' },

    { value: '500+', label: 'Graduates' },

    { value: '98%', label: 'University Placement Rate' },

]



// ---------- FAQ accordion ----------

const openFaq = ref(null)

const faqs = [

    {

        question: 'What age can my child start at Covenant International School?',

        answer: 'We welcome children from as early as 1 year old in our Creche, right through to Secondary school, ' +

            'so your child can stay on one continuous learning journey with us.',

    },

    {

        question: 'What are the school hours?',

        answer: 'Classes run from 8:00 AM to 3:00 PM, Monday to Friday, with extended aftercare available for ' +

            'parents who need it.',

    },

    {

        question: 'Is there a school uniform?',

        answer: 'Yes, all students are required to wear the Covenant International School uniform, which can be ' +

            'purchased directly from the school store during resumption week.',

    },

    {

        question: 'Do you offer scholarships or financial aid?',

        answer: 'We offer a limited number of merit-based scholarships each academic year. Reach out to our ' +

            'admissions office for eligibility requirements and deadlines.',

    },

    {

        question: 'How do I begin the admission process?',

        answer: 'Start by clicking "Apply" or "Start Application" on this page. Our admissions team will guide you ' +

            'through entrance assessments, documentation, and enrollment.',

    },

]

</script>



<style scoped>

.font-body {

    font-family: 'Bahnschrift', 'Segoe UI Semibold', system-ui, sans-serif;

}

.font-display {

    font-family: 'Bahnschrift SemiBold SemiCondensed', 'Bahnschrift', 'Segoe UI Semibold', system-ui, sans-serif;

}

</style>