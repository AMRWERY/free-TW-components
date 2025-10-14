<template>
    <div>
        <div class="max-w-md mx-auto">
            <div class="relative">
                <input
                    class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-300 focus:border-purple-300 focus:shadow-outline"
                    id="username" type="text" v-model="searchQuery" @input="emitSearch"
                    placeholder="Search for component..." />
                <div class="absolute right-0 inset-y-0 flex items-center">
                    <img src="/svg/close-icon.svg" alt="close-icon"
                        class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer"
                        @click="clearSearch" />
                </div>
                <div class="absolute left-0 inset-y-0 flex items-center">
                    <img src="/svg/search-icon.svg" alt="search-icon"
                        class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['update:search']);

const emitSearch = () => {
    emit('update:search', searchQuery.value);
};

const clearSearch = () => {
    searchQuery.value = '';
    emit('update:search', '');
};
</script>