import { Component } from '@angular/core';
// import { scryptSync,createCipheriv } from 'node:crypto'
const crypto = require('crypto')
const CryptoJS = require("crypto-js")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crypto';
  finalValue = '';
  encryptionObj = {
    string: '',
    key: 'Password used to generate key' 
  }

  constructor() {}

  ngOnInit() {}

  public encryptVariables = () => {
    const key = this.encryptionObj.key
    const iv = Buffer.alloc(16, 0)
    
    const cipher = CryptoJS.AES.encrypt(this.encryptionObj.string, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv), // parse the IV 
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    })
  
    console.log(cipher.toString())
    this.finalValue = cipher.toString()
    alert(cipher.toString())
  }

  public changeValue(type: Number, value: any) {
    if(type === 1) {
      this.encryptionObj.string = value.value
    } else {
      this.encryptionObj.key = value.value
    }
  }

  public decryptVariables = () => {
    const key = this.encryptionObj.key
    const iv = Buffer.alloc(16, 0)
    
    const cipher = CryptoJS.AES.decrypt(this.encryptionObj.string, key, {
        iv: CryptoJS.enc.Utf8.parse(iv), // parse the IV 
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    })
    
    // e.g. B6AeMHPHkEe7/KHsZ6TW/Q==
    console.log(cipher.toString())
    this.finalValue = cipher.toString()
    alert(cipher.toString())
  }

}
