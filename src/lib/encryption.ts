import * as CryptoJS from 'crypto-js';
import { config } from '../constants/config';

// encrypte the any given data
export const encrypt = (string: string): string => {
    const encryptedMessage = CryptoJS.AES.encrypt(
        string,
        config.encryptionKey,
    ).toString();
    return encryptedMessage;
};

// decrypt the any given data
export const decrypt = (encryptedMessage: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, config.encryptionKey);
    const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
};

// hash the password
export const hashPassword = (
    password: string,
): {
    salt: string;
    hash: string;
} => {
    const salt = CryptoJS.lib.WordArray.random(
        config.hashFunctionSaltSize,
    ).toString();
    const hash = CryptoJS.PBKDF2(password, salt, {
        keySize: config.hashFunctionKeySize,
        iterations: config.hashFunctionIterations,
    }).toString();
    return {
        salt,
        hash,
    };
};

// verify the hash password
export const verifyPassword = (
    password: string,
    hashedPassword: string,
    salt: string,
): boolean => {
    const hash = CryptoJS.PBKDF2(password, salt, {
        keySize: config.hashFunctionKeySize,
        iterations: config.hashFunctionIterations,
    }).toString();

    return hash === hashedPassword;
};
