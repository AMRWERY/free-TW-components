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
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently
                                asked questions</h2>
                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                                some simple filler text, also known as placeholder text. It shares some characteristics
                                of a real written text but is random or otherwise generated.</p>
                        </div>

                        <div class="mx-auto flex max-w-screen-sm flex-col border-t">
                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">How does the product
                                        work?</span>
                                    <span class="text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 hidden text-gray-500">This is a section of some simple filler text, also
                                    known as placeholder text. It shares some characteristics of a real written text but
                                    is random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
                            </div>

                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">What are the
                                        features?</span>
                                    <span class="text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 hidden text-gray-500">This is a section of some simple filler text, also
                                    known as placeholder text. It shares some characteristics of a real written text but
                                    is random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
                            </div>

                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">What about
                                        integrations?</span>
                                    <span class="text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 hidden text-gray-500">This is a section of some simple filler text, also
                                    known as placeholder text. It shares some characteristics of a real written text but
                                    is random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
                            </div>

                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">Is support
                                        available?</span>

                                    <span class="rotate-180 text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 text-gray-500">This is a section of some simple filler text, also known
                                    as placeholder text. It shares some characteristics of a real written text but is
                                    random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
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
                        <div class="mb-10 md:mb-16">
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently
                                asked questions</h2>
                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                                some simple filler text, also known as placeholder text. It shares some characteristics
                                of a real written text but is random or otherwise generated.</p>
                        </div>

                        <div class="mx-auto flex max-w-screen-sm flex-col border-t">
                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">How does the product
                                        work?</span>
                                    <span class="text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 hidden text-gray-500">This is a section of some simple filler text, also
                                    known as placeholder text. It shares some characteristics of a real written text but
                                    is random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
                            </div>

                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">What are the
                                        features?</span>
                                    <span class="text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 hidden text-gray-500">This is a section of some simple filler text, also
                                    known as placeholder text. It shares some characteristics of a real written text but
                                    is random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
                            </div>

                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">What about
                                        integrations?</span>
                                    <span class="text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 hidden text-gray-500">This is a section of some simple filler text, also
                                    known as placeholder text. It shares some characteristics of a real written text but
                                    is random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
                            </div>

                            <div class="border-b">
                                <div
                                    class="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                                    <span class="font-semibold transition duration-100 md:text-lg">Is support
                                        available?</span>

                                    <span class="rotate-180 text-indigo-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <p class="mb-4 text-gray-500">This is a section of some simple filler text, also known
                                    as placeholder text. It shares some characteristics of a real written text but is
                                    random or otherwise generated. It may be used to display a sample of fonts or
                                    generate text for testing.</p>
                            </div>
                        </div>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>