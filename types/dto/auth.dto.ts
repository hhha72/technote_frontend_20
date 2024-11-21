export interface LoginReqDto {
    id: string; // 아이디
    password: string; // 비밀번호
}

export interface LoginResDto {
    id: string; // 아이디
    type: number;   // 사용자종류 0: 관리자, 1: 사용자
    name: string;   // 이름
    email?: string; // 이메일
    refreshToken: string;   // 리프레시토큰
    accessToken: string;    // 엑세스토큰
}

export interface SearchPasswordDto {
    email: string;  // 이메일
    name: string;   // 이름
}

export interface ResetPasswordDto {
    token: string; // 비밀번호 변경 토큰
    password: string;   // 새 비밀번호
}