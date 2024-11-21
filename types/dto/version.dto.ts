export interface CreateVersionDto {
    version: string;    // 버전
    osType: number; // OS 종류 0: 안드로이드, 1: IOS
    updateType: number; // 업데이트 종류. 1: 선택, 2: 강제
    storeUrl: string;    // 다운로드 URL
    files: File[];  // 앱 및 아이콘 파일 목록
    // description: string;    // 설명
}

export interface UpdateVersionDto {
    version?: string;    // 버전
    osType?: number; // OS 종류 0: 안드로이드, 1: IOS
    updateType?: number; // 업데이트 종류. 1: 선택, 2: 강제
    storeUrl?: string;    // 다운로드 URL
    files?: File[];  // 앱 및 아이콘 파일 목록
    // description?: string;    // 설명
}

export interface ListVersionDto extends CreateVersionDto {
    id: string; // 아이디
    state: number; // 상태. 0: 비활성, 1: 활성
    downloadUrl?: string;  // 다운로드 URL
    createdAt: Date; // 생성일
    updatedAt: Date; // 수정일
}

export interface VersionDto extends ListVersionDto {
    description?: string;    // 설명
}
