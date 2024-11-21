import type { CreatePushDto, UpdatePushDto } from "~/types/dto/push.dto";
import type { ResponseDto } from "~/types/dto/response.dto";

export const usePushApi = defineStore('push', {
    actions: {
        async createPush(payload: CreatePushDto): Promise<ResponseDto> {
            try {
                const data = new FormData();
                data.append('title', payload.title);
                data.append('message', payload.message);
                data.append('osType', payload.osType.toString());
                if (payload.imageUrl) {
                    data.append('image', payload.imageUrl);
                }
                if (payload.linkUrl) {
                    data.append('url', payload.linkUrl);
                }
                if (payload.files) {
                    for (const file in payload.files) {
                        data.append('files', file);
                    }
                }
                const response = await fetch('/api/push', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
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
                console.error('createPush - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getPushList(): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/push', {
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
                console.error('getPushList - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async updatePush(id: string, payload: UpdatePushDto): Promise<ResponseDto> {
            try {
                const data = new FormData();
                if (payload.title) {
                    data.append('title', payload.title);
                }
                if (payload.message) {
                    data.append('message', payload.message);
                }
                if (payload.osType) {
                    data.append('osType', payload.osType.toString());
                }
                if (payload.imageUrl) {
                    data.append('image', payload.imageUrl);
                }
                if (payload.linkUrl) {
                    data.append('url', payload.linkUrl);
                }
                if (payload.files) {
                    for (const file in payload.files) {
                        data.append('files', file);
                    }
                }
                const response = await fetch(`/api/push/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
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
                console.error('updatePush - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async deletePush(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/push/${id}`, {
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
                console.error('deletePush - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
    }
});
