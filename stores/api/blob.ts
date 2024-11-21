export const useBlobApi = defineStore('blob', {
    actions: {
        async uploadBlob(file: File) {
            try {
                const data = new FormData();
                data.append('data', file);
                const response = await fetch('/api/blob', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
                });
                if (response.ok) {
                    return await response.json();
                } else if (response.headers.get('content-type')?.includes('application/json')) {
                    return await response.json();
                } else {
                    return {
                        result: false,
                        message: response.statusText,
                        code: 0,
                    };
                }
            }
            catch (error: any) {
                console.error('uploadBlob - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                };
            }
        },
        async downloadBlob(imageId: string): Promise<any> {
            try {
                const response = await fetch(`/api/blob/${imageId}`, {
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
                console.error('downloadBlob - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                };
            }
        },
        async deleteBlob(id: any) {
            try {
                const response = await fetch(`/api/blob/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    return await response.json();
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
                console.error('deleteBlob - ' + error);
                return {
                    result: false,
                    message: error.message,
                    code: 0,
                };
            }
        },
    },
});
