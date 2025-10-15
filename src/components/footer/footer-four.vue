<template>
    <div>
        <div class="p-8">
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
                <footer class="bg-white pb-10 pt-4 sm:py-10 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div
                            class="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:pt-12">
                            <div class="col-span-full lg:col-span-1 lg:row-span-2">
                                <div class="mb-4 lg:-mt-2">
                                    <a href="#"
                                        class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                                        aria-label="logo">
                                        <svg width="95" height="94" viewBox="0 0 95 94"
                                            class="h-auto w-5 text-indigo-500" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                                        </svg>
                                        Flowrift
                                    </a>
                                </div>
                                <p class="text-sm text-gray-500">© 2021 - Present Flowrift. All rights reserved.</p>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
                                    </div>
                                </nav>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor
                                            Relations</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                                    </div>
                                </nav>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                                    </div>
                                </nav>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms
                                            of Service</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                                            Policy</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie
                                            settings</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
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
<footer class="bg-white pb-10 pt-4 sm:py-10 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div
                            class="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:pt-12">
                            <div class="col-span-full lg:col-span-1 lg:row-span-2">
                                <div class="mb-4 lg:-mt-2">
                                    <a href="#"
                                        class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                                        aria-label="logo">
                                        <svg width="95" height="94" viewBox="0 0 95 94"
                                            class="h-auto w-5 text-indigo-500" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                                        </svg>
                                        Flowrift
                                    </a>
                                </div>
                                <p class="text-sm text-gray-500">© 2021 - Present Flowrift. All rights reserved.</p>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
                                    </div>
                                </nav>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor
                                            Relations</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                                    </div>
                                </nav>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                                    </div>
                                </nav>
                            </div>

                            <div>
                                <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>
                                <nav class="flex flex-col gap-4">
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms
                                            of Service</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                                            Policy</a>
                                    </div>
                                    <div>
                                        <a href="#"
                                            class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie
                                            settings</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>