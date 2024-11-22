import { defineStore } from 'pinia'
import { encryptStorage } from '@/utils/storage';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // user: encryptStorage()?.getItem('PERSONAL_SESSION'),
        user: null as any,
    }),
    getters: {
        isAuthenticated: (state) => !!state.user,
        userId: (state) => state.user?.id,
        userName: (state) => state.user?.name,
        refreshToken: (state) => state.user?.refreshToken,
    },
    actions: {
        setUser(user: any) {
            this.user = user;
        },
        clearUser() {
            this.user = null;
        },
    }
})