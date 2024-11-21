export interface DashboardDto {
    id: string; // 아이디
    title: string;  // 제목
    content: string;    // 내용
    publicType: number; // 공개범위 0: 비공개, 1: 회원공개, 2: 전체공개
    authorId: string;   // 작성자아이디
    authorName: string; // 작성자이름
    viewCount: number;  // 조회수
    createdAt: Date;    // 작성일
    updatedAt: Date;    // 수정일
}
