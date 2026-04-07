<template>
  <div>
    <main-layout>
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade">
          <div :key="route.path">
            <component :is="Component" :key="route.path" />
          </div>
        </transition>
      </router-view>
    </main-layout>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.slide-fade-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.slide-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>