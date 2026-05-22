import { ref } from 'vue'

const savedMode = localStorage.getItem('is_mock_mode')
// Проверяем localStorage на наличие флага и проставляем его значение
export const isMockMode = ref(savedMode ? savedMode === 'true' : true)
