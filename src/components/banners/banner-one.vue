<template>
    <div class="p-8">
        <div class="flex justify-end gap-2 mb-4">
            <button @click="showPreview = true; showCode = false" class="p-2 rounded-md transition-colors duration-200"
                :class="{
                    'bg-indigo-500 text-white': showPreview,
                    'bg-gray-200 text-gray-700 hover:bg-gray-300': !showPreview,
                }" aria-label="Show Component Preview">
                <img src="/svg/eye-icon.svg" alt="eye-icon" class="h-6 w-6">
            </button>

            <button @click="showCode = true; showPreview = false" class="p-2 rounded-md transition-colors duration-200"
                :class="{
                    'bg-indigo-500 text-white': showCode,
                    'bg-gray-200 text-gray-700 hover:bg-gray-300': !showCode,
                }" aria-label="Show Component Code">
                <img src="/svg/code-icon.svg" alt="code-icon" class="h-6 w-6">
            </button>
        </div>

        <!-- Component Preview Section -->
        <div v-if="showPreview" class="rounded-md shadow-sm overflow-hidden">
            <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div
                    class="relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                    <div
                        class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
                        This is a section of some simple filler text, also known as placeholder
                        text.
                    </div>
                    <router-link to=""
                        class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm">Learn
                        more</router-link>
                    <div
                        class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
                        <button type="button"
                            class="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useClipboardExample } from '@/composables/useClipboard';

const showPreview = ref(true);
const showCode = ref(false);

const componentCode = ref(`
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
      <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
        This is a section of some simple filler text, also known as placeholder text.
      </div>
      <router-link to="" class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm">
        Learn more
      </router-link>
      <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
        <button type="button" class="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>