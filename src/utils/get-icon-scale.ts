import { ref } from "vue"

export const iconScale = ref(5)

export function getIconScale() {
    iconScale.value = window.innerWidth < 768 ? 3 : 5
}