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
import { RouterView } from 'vue-router'
import mainLayout from './components/main-layout.vue';
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>