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
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Collections
                        </h2>
                        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                        loading="lazy" alt="Photo by Austin Wade"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Men</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                        loading="lazy" alt="Photo by engin akyurt"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Women</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Summer Season</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                        loading="lazy" alt="Photo by Austin Wade"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Men</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Streetwear</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                                        loading="lazy" alt="Photo by Austin Wade"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Women</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Sale</span>
                                    </div>
                                </a>
                            </div>
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
                        <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Collections
                        </h2>
                        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                        loading="lazy" alt="Photo by Austin Wade"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Men</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                        loading="lazy" alt="Photo by engin akyurt"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Women</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Summer Season</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                        loading="lazy" alt="Photo by Austin Wade"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Men</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Streetwear</span>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                                        loading="lazy" alt="Photo by Austin Wade"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span class="text-gray-500">Women</span>
                                        <span class="text-lg font-bold text-gray-800 lg:text-xl">Sale</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>