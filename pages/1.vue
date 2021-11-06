<template>
  <div>
    page 1
    <div @click="handleNavigate">click</div>
  </div>
</template>

<script lang="ts" setup>
import { navigateTo as navigateTo1 } from '@/utils/common';
import { navigateTo as navigateTo2 } from '@/composables/common';

const handleNavigate = () => {
  // navigateTo1('/2')
  navigateTo2('/2')
}
</script>
