<template>
  <div>
    page 1
    <div @click="handleNavigate">click</div>
  </div>
</template>

<script lang="ts" setup>
import { navigateTo } from '@/utils/common';

const handleNavigate = () => {
  try {
    navigateTo('/2')
  } catch(e){
  }
}
</script>
