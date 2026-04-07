<template>
    <div class="flex-grow flex flex-col items-center justify-center py-12 px-4 animate-pulse">
        <!-- Title -->
        <div class="h-10 sm:h-14 w-72 sm:w-[420px] bg-gray-800/70 rounded-2xl mb-4"></div>
        <div class="h-4 w-56 sm:w-80 bg-gray-800/50 rounded-full mb-3"></div>
        <div class="h-4 w-44 sm:w-64 bg-gray-800/40 rounded-full mb-12"></div>

        <!-- Stats -->
        <div class="flex items-center justify-center gap-6 sm:gap-10 mb-12 flex-wrap">
            <div class="text-center space-y-2">
                <div class="h-9 w-16 bg-gray-800/60 rounded-lg mx-auto"></div>
                <div class="h-2.5 w-20 bg-gray-800/40 rounded-full mx-auto"></div>
            </div>
            <div class="w-px h-10 bg-gray-800 hidden sm:block"></div>
            <div class="text-center space-y-2">
                <div class="h-9 w-10 bg-gray-800/60 rounded-lg mx-auto"></div>
                <div class="h-2.5 w-20 bg-gray-800/40 rounded-full mx-auto"></div>
            </div>
            <div class="w-px h-10 bg-gray-800 hidden sm:block"></div>
            <div class="text-center space-y-2">
                <div class="h-9 w-14 bg-gray-800/60 rounded-lg mx-auto"></div>
                <div class="h-2.5 w-16 bg-gray-800/40 rounded-full mx-auto"></div>
            </div>
        </div>

        <!-- Divider -->
        <div class="flex items-center gap-3 mb-5 w-full max-w-4xl">
            <div class="flex-1 h-px bg-gray-800/60"></div>
            <div class="h-2.5 w-32 bg-gray-800/50 rounded-full"></div>
            <div class="flex-1 h-px bg-gray-800/60"></div>
        </div>

        <!-- Category cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-4xl">
            <div v-for="i in 6" :key="i"
                class="rounded-xl bg-[#13131a] border border-gray-800/60 p-4 space-y-2">
                <div class="h-4 bg-gray-800/60 rounded w-3/4"></div>
                <div class="h-3 bg-gray-800/40 rounded w-1/3"></div>
            </div>
        </div>
    </div>
</template>
