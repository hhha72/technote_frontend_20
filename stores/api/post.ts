import type { CreatePostDto, UpdatePostDto } from "~/types/dto/post.dto";
import type { ResponseDto } from "~/types/dto/response.dto";

export const usePostApi = defineStore('post', {
    actions: {
        async createPost(payload: CreatePostDto): Promise<ResponseDto> {
            try {
                const data = new FormData();
                data.append('title', payload.title);
                data.append('content', payload.content);
                data.append('groupId', payload.groupId.toString());
                data.append('publicType', payload.publicType.toString());
                if (payload.image) {
                    data.append('image', payload.image);
                }
                if (payload.file) {
                    data.append('files', payload.file);
                }
                const response = await fetch('/api/post', {
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
                console.error('createPost - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getPosts(): Promise<ResponseDto> {
            try {
                const response = await fetch('/api/post', {
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
                console.error('getPosts - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async getPost(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/post/${id}`, {
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
                console.error('getPost - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async downloadPostFile(authId: string, id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/data/${authId}/${id}`, {
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
                console.error('downloadPostFile - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async updatePost(id: string, payload: UpdatePostDto): Promise<ResponseDto> {
            try {
                const data = new FormData();
                if (payload.title) {
                    data.append('title', payload.title);
                }
                if (payload.content) {
                    data.append('content', payload.content);
                }
                if (payload.groupId) {
                    data.append('groupId', payload.groupId.toString());
                }
                if (payload.publicType) {
                    data.append('publicType', payload.publicType.toString());
                }
                if (payload.image) {
                    data.append('image', payload.image);
                }
                if (payload.file) {
                    data.append('files', payload.file);
                }
                const response = await fetch(`/api/post/${id}`, {
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
                console.error('updatePost - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
        async deletePost(id: string): Promise<ResponseDto> {
            try {
                const response = await fetch(`/api/post/${id}`, {
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
            }
            catch (error: any) {
                console.error('deletePost - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                }
            }
        },
    }
});
