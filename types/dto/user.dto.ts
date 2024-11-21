export interface CreateUserDto {
    email: string;  // 이메일
    name: string;   // 이름
    password: string;   // 비밀번호
}

export interface UpdatePasswordDto {
    password?: string;  // 비밀번호
    newPassword?: string;   // 새비밀번호
}

export interface ListUserDto extends CreateUserDto {}
