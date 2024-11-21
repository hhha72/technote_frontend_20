export default defineEventHandler(async (event) => {
    const { url } = event.node.req;
    if (url?.includes('/api')) {
        // '/api' 인 경우 로그인이 되어 있으면 로그인 처리를 한다.
        const accessToken = getCookie(event, 'accessToken');
        if (accessToken) {
            event.node.req.headers.authorization = `Bearer ${accessToken}`;
        }
        return;
    }
    // 라우터 가드설정을 여기에 한다.
});