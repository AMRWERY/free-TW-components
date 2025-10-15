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
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                                some
                                simple filler text, also known as placeholder text. It shares some characteristics of a
                                real
                                written text but is random or otherwise generated.</p>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                                <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                    <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Minh Pham"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div class="flex flex-1 flex-col p-4 sm:p-6">
                                    <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                        <a href="#"
                                            class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New
                                            trends in Tech</a>
                                    </h2>
                                    <p class="mb-8 text-gray-500">This is a section of some simple filler text, also
                                        known
                                        as
                                        placeholder text. It shares some characteristics of a real written text.</p>
                                    <div class="mt-auto flex items-end justify-between">
                                        <div class="flex items-center gap-2">
                                            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                                                    loading="lazy" alt="Photo by Brock Wegner"
                                                    class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div>
                                                <span class="block text-indigo-500">Mike Lane</span>
                                                <span class="block text-sm text-gray-400">July 19, 2021</span>
                                            </div>
                                        </div>
                                        <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                                <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Lorenzo Herrera"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div class="flex flex-1 flex-col p-4 sm:p-6">
                                    <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                        <a href="#"
                                            class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working
                                            with legacy stacks</a>
                                    </h2>
                                    <p class="mb-8 text-gray-500">This is a section of some simple filler text, also
                                        known
                                        as
                                        placeholder text. It shares some characteristics of a real written text.</p>
                                    <div class="mt-auto flex items-end justify-between">
                                        <div class="flex items-center gap-2">
                                            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <img src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                                                    loading="lazy" alt="Photo by peter bucks"
                                                    class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div>
                                                <span class="block text-indigo-500">Jane Jackobs</span>
                                                <span class="block text-sm text-gray-400">April 07, 2021</span>
                                            </div>
                                        </div>

                                        <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                                <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                    <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Magicle"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div class="flex flex-1 flex-col p-4 sm:p-6">
                                    <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                        <a href="#"
                                            class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10
                                            best
                                            smartphones for devs</a>
                                    </h2>
                                    <p class="mb-8 text-gray-500">This is a section of some simple filler text, also
                                        known
                                        as
                                        placeholder text. It shares some characteristics of a real written text.</p>
                                    <div class="mt-auto flex items-end justify-between">
                                        <div class="flex items-center gap-2">
                                            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <img src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                                                    loading="lazy" alt="Photo by Jassir Jonis"
                                                    class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div>
                                                <span class="block text-indigo-500">Tylor Grey</span>
                                                <span class="block text-sm text-gray-400">March 15, 2021</span>
                                            </div>
                                        </div>
                                        <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                                <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                    <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Martin Sanchez"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div class="flex flex-1 flex-col p-4 sm:p-6">
                                    <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                        <a href="#"
                                            class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8
                                            High
                                            performance Notebooks</a>
                                    </h2>
                                    <p class="mb-8 text-gray-500">This is a section of some simple filler text, also
                                        known
                                        as
                                        placeholder text. It shares some characteristics of a real written text.</p>
                                    <div class="mt-auto flex items-end justify-between">
                                        <div class="flex items-center gap-2">
                                            <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                                                    loading="lazy" alt="Photo by Aiony Haust"
                                                    class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div>
                                                <span class="block text-indigo-500">Ann Park</span>
                                                <span class="block text-sm text-gray-400">January 27, 2021</span>
                                            </div>
                                        </div>
                                        <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                                    </div>
                                </div>
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
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

                    <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some
                        simple filler text, also known as placeholder text. It shares some characteristics of a real
                        written text but is random or otherwise generated.</p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                loading="lazy" alt="Photo by Minh Pham"
                                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>
                        <div class="flex flex-1 flex-col p-4 sm:p-6">
                            <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                <a href="#"
                                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New
                                    trends in Tech</a>
                            </h2>
                            <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as
                                placeholder text. It shares some characteristics of a real written text.</p>
                            <div class="mt-auto flex items-end justify-between">
                                <div class="flex items-center gap-2">
                                    <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                        <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                                            loading="lazy" alt="Photo by Brock Wegner"
                                            class="h-full w-full object-cover object-center" />
                                    </div>
                                    <div>
                                        <span class="block text-indigo-500">Mike Lane</span>
                                        <span class="block text-sm text-gray-400">July 19, 2021</span>
                                    </div>
                                </div>
                                <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                                loading="lazy" alt="Photo by Lorenzo Herrera"
                                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>
                        <div class="flex flex-1 flex-col p-4 sm:p-6">
                            <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                <a href="#"
                                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working
                                    with legacy stacks</a>
                            </h2>
                            <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as
                                placeholder text. It shares some characteristics of a real written text.</p>
                            <div class="mt-auto flex items-end justify-between">
                                <div class="flex items-center gap-2">
                                    <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                        <img src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                                            loading="lazy" alt="Photo by peter bucks"
                                            class="h-full w-full object-cover object-center" />
                                    </div>
                                    <div>
                                        <span class="block text-indigo-500">Jane Jackobs</span>
                                        <span class="block text-sm text-gray-400">April 07, 2021</span>
                                    </div>
                                </div>

                                <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                            <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                                loading="lazy" alt="Photo by Magicle"
                                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>
                        <div class="flex flex-1 flex-col p-4 sm:p-6">
                            <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                <a href="#"
                                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best
                                    smartphones for devs</a>
                            </h2>
                            <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as
                                placeholder text. It shares some characteristics of a real written text.</p>
                            <div class="mt-auto flex items-end justify-between">
                                <div class="flex items-center gap-2">
                                    <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                        <img src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                                            loading="lazy" alt="Photo by Jassir Jonis"
                                            class="h-full w-full object-cover object-center" />
                                    </div>
                                    <div>
                                        <span class="block text-indigo-500">Tylor Grey</span>
                                        <span class="block text-sm text-gray-400">March 15, 2021</span>
                                    </div>
                                </div>
                                <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
                        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                                loading="lazy" alt="Photo by Martin Sanchez"
                                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>
                        <div class="flex flex-1 flex-col p-4 sm:p-6">
                            <h2 class="mb-2 text-lg font-semibold text-gray-800">
                                <a href="#"
                                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High
                                    performance Notebooks</a>
                            </h2>
                            <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as
                                placeholder text. It shares some characteristics of a real written text.</p>
                            <div class="mt-auto flex items-end justify-between">
                                <div class="flex items-center gap-2">
                                    <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                                            loading="lazy" alt="Photo by Aiony Haust"
                                            class="h-full w-full object-cover object-center" />
                                    </div>
                                    <div>
                                        <span class="block text-indigo-500">Ann Park</span>
                                        <span class="block text-sm text-gray-400">January 27, 2021</span>
                                    </div>
                                </div>
                                <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>