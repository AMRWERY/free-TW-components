<template>
    <div>
        <code>{{ source }}</code>
        <button @click="() => onCopy()" :disabled="copied">
            <span class="flex items-center gap-1" v-if="copied">Copied
                <img src="/svg/check-icon.svg" alt="copy-icon" class="w-4 h-4">
            </span>

            <span class="flex items-center gap-1" v-else>
                Copy
                <img src="/svg/copy-icon.svg" alt="copy-icon" class="w-4 h-4">
            </span>
        </button>

        <p aria-live="polite" v-if="!isSupported">
            Clipboard unsupported; using fallback.
        </p>
    </div>
</template>

<script lang="ts" setup>
const { source, copied, isSupported, onCopy } = useClipboardExample();
</script>