import { encryptStorage } from "~/utils/storage";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const { setUser } = useAuthStore();

    const user = encryptStorage()?.getItem('PERSONAL_SESSION');
    console.log('init.client.ts - ', user);
    if (user) {
        setUser(user);
    }
}); 