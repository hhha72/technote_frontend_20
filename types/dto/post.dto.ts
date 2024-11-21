export interface CreatePostDto {
    title: string;  // 제목
    content: string;    // 내용
    groupId: string;    // 그룹아이디
    publicType: number; // 공개범위 0: 비공개, 1: 회원공개, 2: 전체공개
    image?: string; // 대표 이미지 Url
    file?: File;    // 파일
}

export interface UpdatePostDto {
    title?: string;  // 제목
    content?: string;    // 내용
    groupId?: string;    // 그룹아이디
    publicType?: number; // 공개범위 0: 비공개, 1: 회원공개, 2: 전체공개
    image?: string; // 대표 이미지 Url
    file?: File;    // 파일
}

export interface ListPostDto extends CreatePostDto {
    id: string; // 아이디
    authorId: string;   // 작성자아이디
    authorName: string; // 작성자이름
    viewCount: number;  // 조회수
    createdAt: Date;    // 작성일
    updatedAt: Date;    // 수정일
}

export interface PostDto extends ListPostDto {
    downloadUrl?: string;   // 파일 Url
    downloadCount?: number;  // 다운로드수
}
