<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade">
        <div :key="route.path">
          <component :is="Component" :key="route.path" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>