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
                        <div class="mb-10 md:mb-16">
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                                Collections</h2>
                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                                some simple filler text, also known as placeholder text. It shares some characteristics
                                of a real written text but is random or otherwise generated.</p>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <a href="#"
                                class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750"
                                    loading="lazy" alt="Photo by Fakurian Design"
                                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <div
                                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>
                                <div class="relative flex flex-col">
                                    <span class="text-gray-300">Home</span>
                                    <span class="text-lg font-semibold text-white lg:text-xl">Decoration</span>
                                </div>
                            </a>

                            <a href="#"
                                class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                                    loading="lazy" alt="Photo by Fakurian Design"
                                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <div
                                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>
                                <div class="relative flex flex-col">
                                    <span class="text-gray-300">Modern</span>
                                    <span class="text-lg font-semibold text-white lg:text-xl">Furniture</span>
                                </div>
                            </a>
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
                        <div class="mb-10 md:mb-16">
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                                Collections</h2>
                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                                some simple filler text, also known as placeholder text. It shares some characteristics
                                of a real written text but is random or otherwise generated.</p>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <a href="#"
                                class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750"
                                    loading="lazy" alt="Photo by Fakurian Design"
                                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <div
                                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>
                                <div class="relative flex flex-col">
                                    <span class="text-gray-300">Home</span>
                                    <span class="text-lg font-semibold text-white lg:text-xl">Decoration</span>
                                </div>
                            </a>

                            <a href="#"
                                class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                                    loading="lazy" alt="Photo by Fakurian Design"
                                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <div
                                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>
                                <div class="relative flex flex-col">
                                    <span class="text-gray-300">Modern</span>
                                    <span class="text-lg font-semibold text-white lg:text-xl">Furniture</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>