import type { ResponseDto } from "~/types/dto/response.dto";

export const useDashboardApi = defineStore('dashboard', {
    actions: {
        async getRecentPosts(): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/dashboard', {
                    method: 'GET',
                });
                if (response.ok) {
                    return await response.json();
                }
                else if (response.headers.get('content-type')?.includes('application/json')) {
                    return await response.json();
                } else {
                    return {
                        result: false,
                        message: response.statusText,
                        code: 0,
                    }
                }
            } catch (error: any) {
                console.error('getRecentPosts - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getBestPosts(): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/dashboard/best', {
                    method: 'GET',
                });
                if (response.ok) {
                    return await response.json();
                }
                else if (response.headers.get('content-type')?.includes('application/json')) {
                    return await response.json();
                } else {
                    return {
                        result: false,
                        message: response.statusText,
                        code: 0,
                    }
                }
            } catch (error: any) {
                console.error('getBestPosts - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        }
    }
});
