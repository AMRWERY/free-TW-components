<template>
    <ul class="list-none p-0 m-0 space-y-1 animate-pulse">
        <!-- "All Components" row -->
        <li class="flex justify-between items-center px-3 py-3 rounded-lg">
            <div class="h-3.5 bg-gray-800/70 rounded w-28"></div>
            <div class="h-5 w-8 bg-gray-800/60 rounded-md"></div>
        </li>

        <!-- Category rows — varying widths feel more natural -->
        <li v-for="(w, i) in widths" :key="i"
            class="flex justify-between items-center px-3 py-3 rounded-lg">
            <div class="h-3 bg-gray-800/50 rounded" :style="{ width: w }"></div>
            <div class="h-5 w-7 bg-gray-800/40 rounded-md"></div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
const widths = ['5rem', '7rem', '6rem', '4.5rem', '8rem', '5.5rem', '6.5rem', '4rem']
</script>
