<template>
    <section>
        <div class="bg-[#6b064e]">
        <div class="flex-col flex px-5 lg:flex-row gap-2 justify-evenly mt-25 py-10 pb-20 max-w-6xl mx-auto">
            <div>
                <img :src="logo" alt="" class="w-25">
            </div>
            <div class="text-white leading-7">
                <h1 class="font-bold text-[17px]">Contact</h1>
                <p>No.4 Okelue Street, Asaba, Nigeria</p>
                <div class="flex gap-1">
                    <a href="tel:+2348037982952" class="hover:underline">+234 803 798 2952,</a>
                    <a href="tel:+2348033705589" class="hover:underline">+234 803 370 5589</a>
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
    </div>
    </section>
</template>

<script setup>
import logo from '@/assets/images/covenant-logo.jpg'
</script>
