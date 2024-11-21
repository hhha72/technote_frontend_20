import { useAuthApi } from "~/stores/api/auth";
import { ofetch } from "ofetch";
import { Input } from "postcss";

export default defineNuxtPlugin((nuxtApp) => {
    const { refreshSession } = useAuthApi();
    const originalFetch = global.fetch;

    let isRefreshing = false;
    let refreshPromise: Promise<void> | null = null;

    const customFetch: typeof global.fetch = async (Input, init?) => {
        try {
            const response = await originalFetch(Input, init);
            if (response.status === 401 && !isRefreshing) {
                isRefreshing = true;
                if (!refreshPromise) {
                    refreshPromise = refreshTokenFunc();
                }
                await refreshPromise;
                isRefreshing = false;
                refreshPromise = null;

                return customFetch(Input, init);
            }
            return response;
        }
        catch(error) {
            console.error('customFetch - ' + error);
            throw error;
        }
    }

    async function refreshTokenFunc() {
        try {
            const id = localStorage.getItem('id');
            const refreshToken = localStorage.getItem('refreshToken');
            if (!id || !refreshToken) {
                throw new Error('id or refreshToken is null');
            }
            const response = await refreshSession(id, refreshToken);
            if (response.result) {
                return;
            }
            else {
                throw new Error(response.message);
            }
        }
        catch (error) {
            console.error('refreshTokenFunc - ' + error);
            throw error;
        }
    }

    global.fetch = customFetch;
    
    return {
        provide: {
            fetch: customFetch,
        }
    }
});
