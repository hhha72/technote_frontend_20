export default defineEventHandler(async (event) => {
    const payload = await readBody(event);
    const { id, refreshToken } = payload;

    const response = await fetch(`${process.env.BACKEND_API}/auth/${id}/session`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    });
    if (response.ok) {
        const resRefresh = await response.json();
        const { accessToken } = resRefresh;
        setCookie(event, 'accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 1, // 1일
        });
    }
    return response;
});