import { EncryptStorage } from 'encrypt-storage';

export const encryptStorage = (): EncryptStorage | null => {
    const isInClientSide =
        typeof window !== 'undefined' && typeof window?.self !== 'undefined';

    if (isInClientSide) {
        // 어차피 클라이언트에서 사용해서 키보안이 불가능하다.(소스에 바로 넣는것이 따로 모야놓는것보다 분석이 어려울듯)
        return new EncryptStorage(
            '5Kozu813wFpR3KelBvb8Rpv8DtZXay5IR41aHP4UcDU=',
            // options,
        );
    }

    return null;
};
