<template>
    <div>
        <div class="flex flex-col items-center mt-12 space-y-4">
            <!-- Pages Info -->
            <div class="text-sm text-gray-400 font-mono">
                Page {{ componentsStore.currentPage }} of {{ componentsStore.totalPages }}
                <span class="text-cyan-400 ml-2">
                    {{ totalItems }} components
                </span>
            </div>

            <!-- Pagination Buttons -->
            <div class="flex items-center space-x-2">
                <!-- Previous Button -->
                <button @click="handlePageChange(componentsStore.currentPage - 1)"
                    :disabled="componentsStore.currentPage === 1"
                    class="relative p-3 rounded-xl transition-all duration-300 flex items-center justify-center group"
                    :class="componentsStore.currentPage === 1
                        ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:from-cyan-500/40 hover:to-blue-500/40 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25'">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <!-- Page Numbers -->
                <button v-for="pageNum in visiblePageRange" :key="pageNum" @click="handlePageChange(pageNum)"
                    class="relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center group"
                    :class="componentsStore.currentPage === pageNum
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                        : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25'">
                    {{ pageNum }}
                </button>

                <!-- Next Button -->
                <button @click="handlePageChange(componentsStore.currentPage + 1)"
                    :disabled="componentsStore.currentPage === componentsStore.totalPages"
                    class="relative p-3 rounded-xl transition-all duration-300 flex items-center justify-center group"
                    :class="componentsStore.currentPage === componentsStore.totalPages
                        ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 hover:from-cyan-500/40 hover:to-blue-500/40 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25'">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    totalItems: number
}>()

const componentsStore = useComponentsStore()

const handlePageChange = (page: number) => {
    componentsStore.goToPage(page);
};

const visiblePageRange = computed(() => {
    const delta = 2
    const rangeWithDots: (number | string)[] = []

    if (componentsStore.totalPages > 0) {
        rangeWithDots.push(1)
    }

    let start = Math.max(2, componentsStore.currentPage - delta);
    let end = Math.min(componentsStore.totalPages - 1, componentsStore.currentPage + delta);

    if (start > 2) {
        rangeWithDots.push('...')
    }

    for (let i = start; i <= end; i++) {
        if (!rangeWithDots.includes(i)) {
            rangeWithDots.push(i)
        }
    }

    if (end < componentsStore.totalPages - 1 && componentsStore.totalPages > 1) {
        rangeWithDots.push('...')
    }

    if (componentsStore.totalPages > 1 && !rangeWithDots.includes(componentsStore.totalPages)) {
        rangeWithDots.push(componentsStore.totalPages)
    }

    return rangeWithDots.filter((p): p is number => typeof p === 'number')
})
</script>