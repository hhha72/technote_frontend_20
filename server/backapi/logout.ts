export default defineEventHandler(async (event) => {
    
    const accessToken = getCookie(event, 'accessToken');
    if (accessToken) {
        await fetch(`${process.env.BACKEND_API}/auth`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }
    
    setCookie(event, 'accessToken', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
    });
});