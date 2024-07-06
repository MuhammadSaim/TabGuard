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
