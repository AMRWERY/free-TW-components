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
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
                            <div class="mb-4 sm:mb-8">
                                <h2 class="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">Get
                                    the latest updates</h2>
                                <p class="text-center text-gray-500">Sign up for our newsletter</p>
                            </div>
                            <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                                <input placeholder="Email"
                                    class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <button
                                    class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                            </form>
                            <p class="text-center text-xs text-gray-400">By signing up to our newsletter you agree to
                                our <a href="#"
                                    class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term
                                    of Service</a> and <a href="#"
                                    class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                                    Policy</a>.</p>
                        </div>
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
<div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
                            <div class="mb-4 sm:mb-8">
                                <h2 class="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">Get
                                    the latest updates</h2>
                                <p class="text-center text-gray-500">Sign up for our newsletter</p>
                            </div>
                            <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                                <input placeholder="Email"
                                    class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <button
                                    class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                            </form>
                            <p class="text-center text-xs text-gray-400">By signing up to our newsletter you agree to
                                our <a href="#"
                                    class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term
                                    of Service</a> and <a href="#"
                                    class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                                    Policy</a>.</p>
                        </div>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>