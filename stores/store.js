import { ref } from "vue"
import { defineStore } from "pinia";




export const useStore = defineStore("store", () => {
    const languages = [{ code: 'UZ', language: 'Ўзбекча' }, { code: 'RU', language: 'Русский' }]
    const isOpen = ref(false);
    const current = ref(languages[0]['language'])

    const navbarMenus = ref([
        {name: 'Ўзбекистон', url: '/'}, 
        {name: 'Технология', url: '/'}, 
        {name: 'Жахон', url: '/worldAbout'}, 
        {name: 'Фарғона', url: '/'}, 
        {name: 'Жамият', url: '/'}, 
        {name: 'Сиёсат', url: '/'}, 
        {name: 'Муҳокама', url: '/'}, 
        {name: 'Спорт', url: '/'}
    ])

    async function change(event) {
        toggle()
        current.value = event.target.textContent
    }

    async function toggle() {
        isOpen.value = !isOpen.value
    }
    return { languages, isOpen, current, toggle, change, navbarMenus  }
});