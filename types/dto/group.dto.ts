
export interface CreateGroupDto {
    name: string;   // 그룹명
    description?: string;   // 설명
    type: number;   // 그룹종류 1: 일반게시글, 2: 앱게시글, 3: 자료게시글
}

export interface UpdateGroupDto {
    name?: string;   // 그룹명
    description?: string;   // 설명
    type?: number;   // 그룹종류 1: 일반게시글, 2: 앱게시글, 3: 자료게시글
}

export interface ListGroupDto extends CreateGroupDto {
    base: boolean;  // 기본그룹여부
    createdAt: Date; // 생성일
    updatedAt: Date; // 수정일
}
