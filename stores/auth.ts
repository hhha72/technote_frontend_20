import { defineStore } from 'pinia'
import { useAuthApi } from './api/auth';
import { EncryptStorage } from 'encrypt-storage';

const { login, logout } = useAuthApi();
const storage = new EncryptStorage('5Kozu813wFpR3KelBvb8Rpv8DtZXay5IR41aHP4UcDU=');

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.user,
    },
    actions: {
        async login(credentials: any) {
            const res = await login(credentials);
            if (res.result) {
                const { row } = res;
                this.user = row;
                storage.setItem('PERSONAL_SESSION', JSON.stringify(row));
            }
        },
        logout() {
            logout();
            storage.removeItem('PERSONAL_SESSION');
            this.user = null
        },
    },
})