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
    key: '9cb26f4e-1394-419e-814c-492896f16719',
    output: ''
  }

  constructor() {}

  ngOnInit() {}

  public encryptVariables = () => {
    const cipher = CryptoJS.AES.encrypt(this.encryptionObj.string, this.encryptionObj.key).toString();
    this.encryptionObj.output = cipher
  }

  public changeValue(value: any) {
    this.encryptionObj.string = value.value
  }

  public decryptVariables = () => {
    var bytes  = CryptoJS.AES.decrypt(this.encryptionObj.string,  this.encryptionObj.key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    this.encryptionObj.output = originalText
  }

}
