import type { ResponseDto } from "~/types/dto/response.dto";
import type { CreateUserDto, UpdatePasswordDto } from "~/types/dto/user.dto";

export const useUserApi = defineStore('user', {
    actions: {
        async createUser(payload: CreateUserDto): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/user', {
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
                console.error('createUser - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getUserList(): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/user', {
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
                console.error('getUserList - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getUserProfile(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/user/${id}`, {
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
                console.error('getUserProfile - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async updateUserName(id: string, name: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/user/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        name
                    }),
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
                console.error('updateUser - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async updateUserPassword(id: string, payload: UpdatePasswordDto): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/user/${id}/password`, {
                    method: 'PUT',
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
                console.error('updateUserPassword - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async deleteUser(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/user/${id}`, {
                    method: 'DELETE',
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
                console.error('deleteUser - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        }
    }
});
