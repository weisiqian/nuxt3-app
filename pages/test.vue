<template>
  <div>
    test page
    <div @click="handleNavigate">click</div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useNuxtApp } from '#app';

const handleNavigate = () => {
  try {
    const nuxtApp = useNuxtApp();
    alert(nuxtApp)
    console.error('nuxtApp', nuxtApp)
  } catch(e){
    console.error(e)
    alert(e)
  }
}
</script>
