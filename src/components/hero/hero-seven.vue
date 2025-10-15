<template>
    <div>
        <div class="p-8 bg-[#0a0a0f] min-h-screen">
            <div class="flex justify-end gap-2 mb-4">
                <button @click="showPreview = true; showCode = false"
                    class="p-2 rounded-md transition-colors duration-200" :class="{
                        'bg-indigo-500 text-white': showPreview,
                        'bg-gray-200 text-gray-700 hover:bg-gray-300': !showPreview,
                    }" aria-label="Show Component Preview">
                    <img src="/svg/eye-icon.svg" alt="eye-icon" class="h-6 w-6">
                </button>

                <button @click="showCode = true; showPreview = false"
                    class="p-2 rounded-md transition-colors duration-200" :class="{
                        'bg-indigo-500 text-white': showCode,
                        'bg-gray-200 text-gray-700 hover:bg-gray-300': !showCode,
                    }" aria-label="Show Component Code">
                    <img src="/svg/code-icon.svg" alt="code-icon" class="h-6 w-6">
                </button>
            </div>

            <!-- Component Preview Section -->
            <div v-if="showPreview" class="rounded-md shadow-sm overflow-hidden">
                <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <header class="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
                            <a href="#"
                                class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                                aria-label="logo">
                                <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                                </svg>
                                Flowrift
                            </a>

                            <nav class="hidden gap-12 lg:flex">
                                <a href="#" class="text-lg font-semibold text-indigo-500">Home</a>
                                <a href="#"
                                    class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Features</a>
                                <a href="#"
                                    class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
                                <a href="#"
                                    class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
                            </nav>

                            <a href="#"
                                class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact
                                Sales</a>
                            <button type="button"
                                class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                                Menu
                            </button>
                        </header>

                        <section class="flex flex-col items-center">
                            <div class="flex items-center gap-2 rounded border bg-gray-50 p-2 text-gray-500">
                                <span
                                    class="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">New</span>
                                <span class="text-sm">This is a section of some simple filler text.</span>
                                <a href="#"
                                    class="text-sm font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                            </div>

                            <div
                                class="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
                                <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud
                                    to introduce</p>
                                <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                                    Revolutionary way to build the web</h1>
                                <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">This is a section of
                                    some simple filler text, also known as placeholder text. It shares characteristics
                                    of real text.</p>
                                <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                    <a href="#"
                                        class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start
                                        now</a>
                                    <a href="#"
                                        class="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Take
                                        tour</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <!-- Copy Code Section -->
            <div v-if="showCode" class="mt-4 p-4 border rounded-md bg-gray-100 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold">Code to Copy:</h3>
                    <button @click="onCopy(componentCode)" :disabled="copied"
                        class="px-3 py-1 rounded-md text-sm font-medium" :class="{
                            'bg-green-500 hover:bg-green-600': copied,
                            'bg-blue-500 hover:bg-blue-600': !copied,
                        }">
                        <span class="flex items-center gap-1" v-if="copied">
                            Copied
                            <img src="/svg/check-icon.svg" alt="check-icon" class="w-4 h-4" />
                        </span>
                        <span class="flex items-center gap-1" v-else>
                            Copy
                            <img src="/svg/copy-icon.svg" alt="copy-icon" class="w-4 h-4" />
                        </span>
                    </button>
                </div>
                <div class="relative bg-gray-800 text-white p-4 rounded-md overflow-auto">
                    <pre><code class="language-html">{{ componentCode }}</code></pre>
                </div>
                <p aria-live="polite" v-if="!isSupported" class="text-red-500 mt-2">
                    Clipboard unsupported; using fallback.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useClipboardExample } from '@/composables/useClipboard';

const showPreview = ref(true);
const showCode = ref(false);

const componentCode = ref(`
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <header class="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
                            <a href="#"
                                class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                                aria-label="logo">
                                <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                                </svg>
                                Flowrift
                            </a>

                            <nav class="hidden gap-12 lg:flex">
                                <a href="#" class="text-lg font-semibold text-indigo-500">Home</a>
                                <a href="#"
                                    class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Features</a>
                                <a href="#"
                                    class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
                                <a href="#"
                                    class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
                            </nav>

                            <a href="#"
                                class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact
                                Sales</a>
                            <button type="button"
                                class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                                Menu
                            </button>
                        </header>

                        <section class="flex flex-col items-center">
                            <div class="flex items-center gap-2 rounded border bg-gray-50 p-2 text-gray-500">
                                <span
                                    class="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">New</span>
                                <span class="text-sm">This is a section of some simple filler text.</span>
                                <a href="#"
                                    class="text-sm font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                            </div>

                            <div
                                class="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
                                <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud
                                    to introduce</p>
                                <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                                    Revolutionary way to build the web</h1>
                                <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">This is a section of
                                    some simple filler text, also known as placeholder text. It shares characteristics
                                    of real text.</p>
                                <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                    <a href="#"
                                        class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start
                                        now</a>
                                    <a href="#"
                                        class="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Take
                                        tour</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>