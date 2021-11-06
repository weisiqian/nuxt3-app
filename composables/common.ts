import { useRouter } from 'vue-router';

const router = useRouter()

export function navigateTo(url: string) {
  router.push(url)
}