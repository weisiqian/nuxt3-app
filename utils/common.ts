import { useNuxtApp } from '#app';
const nuxtApp = useNuxtApp();

export function navigateTo(url: string) {
  debugger
  nuxtApp.$router.push('/2')
}