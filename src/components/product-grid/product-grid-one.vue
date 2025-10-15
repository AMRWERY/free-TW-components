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
                        <div class="mb-6 flex items-end justify-between gap-4">
                            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>
                            <a href="#"
                                class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show
                                more</a>
                        </div>

                        <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Rachit Tank"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <span
                                        class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Timely
                                        Watch</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$15.00</span>
                                        <span class="mb-0.5 text-red-500 line-through">$30.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Galina N"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Fancy
                                        Plant</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$9.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by eniko kis"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Elderly
                                        Cam</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$45.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Irene Kredenets"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Shiny
                                        Shoe</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$29.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1528476513691-07e6f563d97f?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Charles Deluvio"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Spiky
                                        Plant</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$4.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Fernando Lavin"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Wieldy
                                        Film</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$19.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Kiran CK"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <span
                                        class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Sturdy
                                        Stand</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$12.00</span>
                                        <span class="mb-0.5 text-red-500 line-through">$24.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Fakurian Design"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Lazy
                                        Bottle</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$9.00</span>
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
                        <div class="mb-6 flex items-end justify-between gap-4">
                            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>
                            <a href="#"
                                class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show
                                more</a>
                        </div>

                        <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Rachit Tank"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <span
                                        class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Timely
                                        Watch</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$15.00</span>
                                        <span class="mb-0.5 text-red-500 line-through">$30.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Galina N"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Fancy
                                        Plant</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$9.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by eniko kis"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Elderly
                                        Cam</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$45.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Irene Kredenets"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Shiny
                                        Shoe</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$29.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1528476513691-07e6f563d97f?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Charles Deluvio"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Spiky
                                        Plant</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$4.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Fernando Lavin"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Wieldy
                                        Film</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$19.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Kiran CK"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <span
                                        class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Sturdy
                                        Stand</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$12.00</span>
                                        <span class="mb-0.5 text-red-500 line-through">$24.00</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <a href="#"
                                    class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                    <img src="https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy" alt="Photo by Fakurian Design"
                                        class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>
                                <div>
                                    <a href="#"
                                        class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Lazy
                                        Bottle</a>
                                    <div class="flex items-end gap-2">
                                        <span class="font-bold text-gray-800 lg:text-lg">$9.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`);

const { copied, isSupported, onCopy } = useClipboardExample(componentCode);
</script>