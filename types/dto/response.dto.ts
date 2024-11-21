export interface ResponseDto {
    result: boolean;    // 성공여부
    row?: any;  // 결과
    rows?: any[];   // 결과 리스트
    message?: string;   // 오류 메시지
    code?: number;  // 오류 코드
}
