
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
declare var require:any;
const SecureStorage = require('secure-web-storage');



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // SECRET_KEY = environment.llaveStorage;
  constructor() {
  }

  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key:any) {
      key = CryptoJS.SHA256(key);

      return key.toString();
    },
    encrypt: function encrypt(data:any) {
      data = CryptoJS.AES.encrypt(data, 'otracosa');

      data = data.toString();

      return data;
    },
    decrypt: function decrypt(data:any) {
      data = CryptoJS.AES.decrypt(data, 'otracosa');

      data = data.toString(CryptoJS.enc.Utf8);

      return data;
    }
  });

}
