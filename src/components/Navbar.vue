<template>
    <nav
        class="fixed top-0 left-0 w-full z-50 transition-all"
        :class="(props.solid || isScrolled) ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'"
    >
    <div
    class="relative z-60 flex items-center justify-between px-5 py-3 lg:justify-center lg:py-2 lg:gap-100 h-16 lg:h-20"
    :class="mobileMenuOpen ? 'shadow-sm' : ''"
>
            <div><img :src="logo" alt="" class=" w-12 lg:w-17"></div>
            <div class="flex items-center gap-10 px-1">
                <div class="hidden lg:flex gap-8 font-bold">
                    <router-link to="/" class="hover:text-[#eb81cd] transition hover:scale-103">Home</router-link>
                    <router-link to="/about" class="hover:text-[#eb81cd] transition hover:scale-103">About</router-link>
                    <router-link to="/admission" class="hover:text-[#eb81cd] transition hover:scale-103">Admission</router-link>
                    <router-link to="/academics" class="hover:text-[#eb81cd] transition hover:scale-103">Academics</router-link>
                    <router-link to="/contact" class="hover:text-[#eb81cd] transition hover:scale-103">Contacts</router-link>
                </div>
                <div class="hidden lg:flex bg-linear-to-r from-[#eb81cd] to-[#942173] rounded-[5px] px-4 py-1 
                shadow-lg hover:scale-103 hover:to-[#6b064e]">
                    <router-link to="/admission" class="font-bold text-white transition">Apply</router-link>
                </div>
                <div class="lg:hidden">
                    <button
                        type="button"
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        aria-label="Toggle menu"
                        :aria-expanded="mobileMenuOpen"
                    >
                        <i
                            :class="[mobileMenuOpen ? 'fa fa-navicon text-black' : 'fa fa-navicon text-current']"
                            style="font-size:25px"
                        ></i>
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
                 py-8 font-bold shadow-lg z-50"
            >
                <div class="flex flex-col gap-1 py-11 h-full">
                    <router-link
                        to="/"
                        class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition"
                        @click="mobileMenuOpen = false"
                    >Home</router-link>
                    <router-link
                        to="/about"
                        class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition"
                        @click="mobileMenuOpen = false"
                    >About</router-link>
                    <router-link
                        to="/admission"
                        class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition"
                        @click="mobileMenuOpen = false"
                    >Admission</router-link>
                    <router-link
                        to="/academics"
                        class="py-5 px-2 hover:text-[#eb81cd] border-b border-gray-300 transition"
                        @click="mobileMenuOpen = false"
                    >Academics</router-link>
                    <router-link
                        to="/contact"
                        class="py-5 px-2 hover:text-[#eb81cd] transition"
                        @click="mobileMenuOpen = false"
                    >Contacts</router-link>
                    <router-link
                        to="/admission"
                        class="mt-auto inline-block text-center text-[#942173] hover:bg-[#942173] hover:text-white 
                        rounded-[5px] px-4 py-2 font-semibold border shadow-lg"
                        :class="applyPressActive ? 'bg-[#942173] text-white' : ''"
                        @mousedown="startApplyPress"
                        @touchstart="startApplyPress"
                        @mouseup="cancelApplyPress"
                        @mouseleave="cancelApplyPress"
                        @touchend="cancelApplyPress"
                        @touchcancel="cancelApplyPress"
                        @click="mobileMenuOpen = false"
                    >
                        Apply Now
                    </router-link>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/images/covenant-logo.jpg'

// Pass `solid` on pages that don't have a dark hero image behind the navbar
// (e.g. <Navbar solid />) so it starts white-background/dark-text instead of
// transparent/white-text. Pages with a hero can omit it to keep the
// transparent-until-scrolled behavior.
const props = defineProps({
    solid: {
        type: Boolean,
        default: false,
    },
})

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

// ---------- Long-press for the mobile "Apply Now" button ----------
// Self-contained so this component works standalone on any page.
// Hold for LONG_PRESS_MS to trigger; the active state then stays visible
// for HOLD_DISPLAY_MS even after release, then reverts automatically.
const LONG_PRESS_MS = 500
const HOLD_DISPLAY_MS = 2500

const applyPressActive = ref(false)
let pressTimer = null
let revertTimer = null

const startApplyPress = () => {
    cancelApplyPress()
    pressTimer = setTimeout(() => {
        applyPressActive.value = true
        clearTimeout(revertTimer)
        revertTimer = setTimeout(() => {
            applyPressActive.value = false
        }, HOLD_DISPLAY_MS)
    }, LONG_PRESS_MS)
}
const cancelApplyPress = () => {
    if (pressTimer) {
        clearTimeout(pressTimer)
        pressTimer = null
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(pressTimer)
    clearTimeout(revertTimer)
})
</script>