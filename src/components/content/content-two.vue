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
                        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div>
                                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                    <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                                        loading="lazy" alt="Photo by Martin Sanchez"
                                        class="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div class="md:pt-8">
                                <p class="text-center font-bold text-indigo-500 md:text-left">Who we are</p>
                                <h1
                                    class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                                    Our competitive advantage</h1>
                                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                    This is a section of some simple filler text, also known as placeholder text. It
                                    shares some characteristics of a real written text but is random or otherwise
                                    generated. It may be used to display a sample of fonts or generate text for testing.
                                    Filler text is dummy text which has no meaning however looks very similar to real
                                    text.<br /><br />
                                    This is a section of some simple filler text, also known as placeholder text. It
                                    shares some characteristics of a real written text but is <a href="#"
                                        class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a>
                                    or otherwise generated. It may be used to display a sample of fonts or generate text
                                    for testing. Filler text is dummy text which has no meaning however looks very
                                    similar to real text.
                                </p>
                                <h2
                                    class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                                    About us</h2>
                                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler
                                    text, also known as placeholder text. It shares some characteristics of a real
                                    written text but is random or otherwise generated. It may be used to display a
                                    sample of fonts or generate text for testing. Filler text is dummy text which has no
                                    meaning however looks very similar to real text.</p>
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
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div>
                                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                    <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                                        loading="lazy" alt="Photo by Martin Sanchez"
                                        class="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div class="md:pt-8">
                                <p class="text-center font-bold text-indigo-500 md:text-left">Who we are</p>
                                <h1
                                    class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                                    Our competitive advantage</h1>
                                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                    This is a section of some simple filler text, also known as placeholder text. It
                                    shares some characteristics of a real written text but is random or otherwise
                                    generated. It may be used to display a sample of fonts or generate text for testing.
                                    Filler text is dummy text which has no meaning however looks very similar to real
                                    text.<br /><br />
                                    This is a section of some simple filler text, also known as placeholder text. It
                                    shares some characteristics of a real written text but is <a href="#"
                                        class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a>
                                    or otherwise generated. It may be used to display a sample of fonts or generate text
                                    for testing. Filler text is dummy text which has no meaning however looks very
                                    similar to real text.
                                </p>
                                <h2
                                    class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                                    About us</h2>
                                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler
                                    text, also known as placeholder text. It shares some characteristics of a real
                                    written text but is random or otherwise generated. It may be used to display a
                                    sample of fonts or generate text for testing. Filler text is dummy text which has no
                                    meaning however looks very similar to real text.</p>
                            </div>
                        </div>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>