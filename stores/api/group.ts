import type { CreateGroupDto, UpdateGroupDto } from "~/types/dto/group.dto";
import type { ResponseDto } from "~/types/dto/response.dto";

export const useGroupApi = defineStore('group', {
    actions: {
        async createGroup(payload: CreateGroupDto): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/group', {
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
                console.error('createGroup - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getGroupList(): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/group', {
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
                console.error('getGroupList - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async updateGroup(id: string, payload: UpdateGroupDto): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/group/${id}`, {
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
            }
            catch (error: any) {
                console.error('updateGroup - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async setBaseGroup(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/group/${id}/base`, {
                    method: 'PATCH',
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
                console.error('setBaseGroup - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async deleteGroup(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/group/${id}`, {
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
                console.error('deleteGroup - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
    }
});
