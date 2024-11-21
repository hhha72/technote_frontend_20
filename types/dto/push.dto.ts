export interface CreatePushDto {
    title: string;  // 제목
    message: string;    // 내용
    osType: number; // os종류 0: 안드로이드, 1: ios
    imageUrl?: string;   // 이미지 URL
    linkUrl?: string;   // 링크 URL
    files?: File[];  // 첨부 파일 목록
}

export interface ListPushDto {
    id: string; // 아이디
    title: string;  // 제목
    message: string;    // 내용
    osType: number; // os종류 0: 안드로이드, 1: ios
    imageUrl?: string;   // 이미지 URL
    linkUrl?: string;   // 링크 URL
    result: number; // 결과 0: 실패, 1: 성공
    createdAt: Date; // 생성일
    updatedAt: Date; // 수정일
}

export interface UpdatePushDto {
    title?: string;  // 제목
    message?: string;    // 내용
    osType?: number; // os종류 0: 안드로이드, 1: ios
    imageUrl?: string;   // 이미지 URL
    linkUrl?: string;   // 링크 URL
    files?: File[];  // 첨부 파일 목록
}