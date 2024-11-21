import type { ResponseDto } from "~/types/dto/response.dto";
import type { CreateVersionDto, UpdateVersionDto } from "~/types/dto/version.dto";

export const useVersionApi = defineStore('version', {
    actions: {
        async createVersion(payload: CreateVersionDto): Promise<ResponseDto> {
            try {
                const data = new FormData();
                data.append('version', payload.version);
                data.append('osType', payload.osType.toString());
                data.append('updateType', payload.updateType.toString());
                if (payload.storeUrl) {
                    data.append('storeUrl', payload.storeUrl);
                }
                for (const file in payload.files) {
                    data.append('files', file);
                }
                const response = await fetch('/api/version', {
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
                console.error('createVersion - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getVersions(): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/version', {
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
                console.error('getVersions - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getVersion(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/version/${id}`, {
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
                console.error('getVersion - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async downloadAppFile(id: string, fileId: string): Promise<any> {
            try {
                const response = await fetch(`/api/version/${id}/${fileId}`, {
                    method: 'GET',
                });
                if (response.ok) {
                    return await response.blob();
                } else if (response.headers.get('content-type')?.includes('application/json')) {
                    return await response.json();
                } else {
                    return {
                        result: false,
                        message: response.statusText,
                        code: 0,
                    };
                }
            } catch (error: any) {
                console.error('downloadAppFile - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                };
            }
        },
        async activeVersion(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/version/${id}/active`, {
                    method: 'PUT',
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
                console.error('activeVersion - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async updateVersion(id: string, payload: UpdateVersionDto): Promise<ResponseDto> {
            try {
                const data = new FormData();
                if (payload.version) {
                    data.append('version', payload.version);
                }
                if (payload.osType) {
                    data.append('osType', payload.osType.toString());
                }
                if (payload.updateType) {
                    data.append('updateType', payload.updateType.toString());
                }
                if (payload.storeUrl) {
                    data.append('storeUrl', payload.storeUrl);
                }
                for (const file in payload.files) {
                    data.append('files', file);
                }
                const response = await fetch(`/api/version/${id}`, {
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
                console.error('updateVersion - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async deleteVersion(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/version/${id}`, {
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
                console.error('deleteVersion - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
    }
});
