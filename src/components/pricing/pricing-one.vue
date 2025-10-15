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
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Our
                            plans for you</h2>
                        <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                            <div class="flex flex-col rounded-lg border p-4 pt-6">
                                <div class="mb-12">
                                    <div class="mb-2 text-center text-2xl font-bold text-gray-800">Free</div>
                                    <p class="mx-auto mb-8 px-8 text-center text-gray-500">For individuals and
                                        organizations who want to try our system</p>
                                    <div class="space-y-2">
                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">1.000 MB file storage</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">2.000 MB bandwidth per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">200 tasks per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Comunity support</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto flex flex-col gap-8">
                                    <div class="flex items-end justify-center gap-1">
                                        <span class="self-start text-gray-600">$</span>
                                        <span class="text-4xl font-bold text-gray-800">0</span>
                                        <span class="text-gray-500">per user/month</span>
                                    </div>
                                    <a href="#"
                                        class="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Join
                                        for free</a>
                                </div>
                            </div>

                            <div class="relative flex flex-col rounded-lg border-2 border-indigo-500 p-4 pt-6">
                                <div class="mb-12">
                                    <div class="absolute inset-x-0 -top-3 flex justify-center">
                                        <span
                                            class="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most
                                            popular</span>
                                    </div>
                                    <div class="mb-2 text-center text-2xl font-bold text-gray-800">Team</div>
                                    <p class="mx-auto mb-8 px-8 text-center text-gray-500">Avanced feaures for
                                        Individuals and organizations</p>
                                    <div class="space-y-2">
                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited file storage</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">10 GB bandwidth per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">10.000 tasks per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Email support</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">100 Webhooks</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto flex flex-col gap-8">
                                    <div class="flex items-end justify-center gap-1">
                                        <span class="self-start text-gray-600">$</span>
                                        <span class="text-4xl font-bold text-gray-800">19</span>
                                        <span class="text-gray-500">per user/month</span>
                                    </div>
                                    <a href="#"
                                        class="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Continue
                                        with Team</a>
                                </div>
                            </div>

                            <div class="flex flex-col rounded-lg border p-4 pt-6">
                                <div class="mb-12">
                                    <div class="mb-2 text-center text-2xl font-bold text-gray-800">Enterprise</div>
                                    <p class="mx-auto mb-8 px-8 text-center text-gray-500">Maximum performace for
                                        organisations</p>
                                    <div class="space-y-2">
                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited file storage</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited bandwidth per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">1.000.000 tasks per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Email and phone support</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited Webhooks</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto flex flex-col gap-8">
                                    <div class="flex items-end justify-center gap-1">
                                        <span class="self-start text-gray-600">$</span>
                                        <span class="text-4xl font-bold text-gray-800">49</span>
                                        <span class="text-gray-500">per user/month</span>
                                    </div>
                                    <a href="#"
                                        class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Contact
                                        Sales</a>
                                </div>
                            </div>
                        </div>
                        <div class="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <a href="#"
                                class="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Get
                                in touch</a>.</div>
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
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Our
                            plans for you</h2>
                        <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                            <div class="flex flex-col rounded-lg border p-4 pt-6">
                                <div class="mb-12">
                                    <div class="mb-2 text-center text-2xl font-bold text-gray-800">Free</div>
                                    <p class="mx-auto mb-8 px-8 text-center text-gray-500">For individuals and
                                        organizations who want to try our system</p>
                                    <div class="space-y-2">
                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">1.000 MB file storage</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">2.000 MB bandwidth per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">200 tasks per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Comunity support</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto flex flex-col gap-8">
                                    <div class="flex items-end justify-center gap-1">
                                        <span class="self-start text-gray-600">$</span>
                                        <span class="text-4xl font-bold text-gray-800">0</span>
                                        <span class="text-gray-500">per user/month</span>
                                    </div>
                                    <a href="#"
                                        class="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Join
                                        for free</a>
                                </div>
                            </div>

                            <div class="relative flex flex-col rounded-lg border-2 border-indigo-500 p-4 pt-6">
                                <div class="mb-12">
                                    <div class="absolute inset-x-0 -top-3 flex justify-center">
                                        <span
                                            class="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most
                                            popular</span>
                                    </div>
                                    <div class="mb-2 text-center text-2xl font-bold text-gray-800">Team</div>
                                    <p class="mx-auto mb-8 px-8 text-center text-gray-500">Avanced feaures for
                                        Individuals and organizations</p>
                                    <div class="space-y-2">
                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited file storage</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">10 GB bandwidth per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">10.000 tasks per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Email support</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">100 Webhooks</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto flex flex-col gap-8">
                                    <div class="flex items-end justify-center gap-1">
                                        <span class="self-start text-gray-600">$</span>
                                        <span class="text-4xl font-bold text-gray-800">19</span>
                                        <span class="text-gray-500">per user/month</span>
                                    </div>
                                    <a href="#"
                                        class="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Continue
                                        with Team</a>
                                </div>
                            </div>

                            <div class="flex flex-col rounded-lg border p-4 pt-6">
                                <div class="mb-12">
                                    <div class="mb-2 text-center text-2xl font-bold text-gray-800">Enterprise</div>
                                    <p class="mx-auto mb-8 px-8 text-center text-gray-500">Maximum performace for
                                        organisations</p>
                                    <div class="space-y-2">
                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited file storage</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited bandwidth per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">1.000.000 tasks per month</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Email and phone support</span>
                                        </div>

                                        <div class="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="text-gray-600">Unlimited Webhooks</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto flex flex-col gap-8">
                                    <div class="flex items-end justify-center gap-1">
                                        <span class="self-start text-gray-600">$</span>
                                        <span class="text-4xl font-bold text-gray-800">49</span>
                                        <span class="text-gray-500">per user/month</span>
                                    </div>
                                    <a href="#"
                                        class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Contact
                                        Sales</a>
                                </div>
                            </div>
                        </div>
                        <div class="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <a href="#"
                                class="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Get
                                in touch</a>.</div>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>