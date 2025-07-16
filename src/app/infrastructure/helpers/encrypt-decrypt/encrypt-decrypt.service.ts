import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class EncryptDecryptService {

  private readonly encryptionKey: string = 'KJoOuwzVKs9Id6NSJakQ+axKB82shazdAOAA'; // 256-bit key || 36 caracteres
  private readonly iv: string = '9B7a543t10L87Q54'; // Replace with your actual IV || 16 caracteres

  constructor() { }

  // Encrypt data using AES-256
  encryptData(data: string): string {
    const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(this.encryptionKey), {
      iv: CryptoJS.enc.Utf8.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  // Decrypt data using AES-256
  decryptData(encryptedData: string): string {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Utf8.parse(this.encryptionKey), {
      iv: CryptoJS.enc.Utf8.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  encodeB64(text:string):string{
    let encoded = btoa(text);
    let encrypt=this.encryptData(encoded);
    return encrypt;
  }
  decodeB64(text:string):string{
    let decrypt=this.decryptData(text);
    let decoded = atob(decrypt);
    return decoded;
  }

  encodeBase64(text:string):string{
    let encoded =btoa(unescape(encodeURIComponent(text)));
    return encoded;
  }
  decodeBase64(text:string):string{
    let decoded='';
    try {
      decoded = decodeURIComponent(escape(atob(text)));
    } catch (error) {
      let decoded='error';
    }

    return decoded;
  }
}
