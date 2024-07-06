export const config = {
    encryptionKey: import.meta.env.VITE_ENCRYPTION_KEY,

    // configurations for the password hashing function
    hashFunctionIterations: 1000,
    hashFunctionKeySize: 256 / 32,
    hashFunctionSaltSize: 128 / 8,
};
