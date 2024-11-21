import type { LoginReqDto, ResetPasswordDto, SearchPasswordDto } from "~/types/dto/auth.dto";
import type { ResponseDto } from "~/types/dto/response.dto";

export const useAuthApi = defineStore('auth', {
    state: () => ({}),
    actions: {
        async login(payload: LoginReqDto): Promise<ResponseDto> {
            try {
                const response = await fetch('/backapi/login', {
                    method: 'POST',
                    body: JSON.stringify(payload),
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
            }
            catch (error: any) {
                console.error('login - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async logout(): Promise<ResponseDto> {
            try {
                const response = await fetch('/backapi/logout', {
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
                console.error('logout - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async checkEmail(email: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/auth/check?email=${email}`, {
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
                console.error('logout - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async verifySession(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/auth/${id}/session`, {
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
                console.error('verifyToken - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async refreshSession(id: string, refreshToken: string): Promise<ResponseDto> {
            try {
                // const response = await fetch(`/api/auth/${id}/refresh`, {
                //     method: 'POST',
                // });
                const response = await fetch('/backapi/refresh', {
                    method: 'POST',
                    body: JSON.stringify({ id, refreshToken }),
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
                console.error('refreshToken - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async verifyPassword(password: string): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/auth/password', {
                    method: 'POST',
                    body: JSON.stringify({ password }),
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
                console.error('verifyPassword - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async searchPassword(payload: SearchPasswordDto): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/auth/search', {
                    method: 'POST',
                    body: JSON.stringify(payload),
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
                console.error('searchPassword - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async resetPassword(payload: ResetPasswordDto): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/auth/refresh', {
                    method: 'POST',
                    body: JSON.stringify(payload),
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
                console.error('changePassword - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
    },
});