export default defineEventHandler(async (event) => {
    const payload = await readBody(event);
    const { name, password } = payload;

    const response = await fetch(`${process.env.BACKEND_API}/auth`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            password,
        }),
    });
    if (response.ok) {
        const resLogin = await response.json();
        const { accessToken } = resLogin;
        setCookie(event, 'accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 1, // 1일
            path: '/',
        });
    }
    return response;
})