const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(modification) {
    this.modification = modification;
  }

  get modification() {
    return this._modification;
  }

  set modification(value) {
    if (value === false) {    
      this._modification = 'reverse';
      return;
    }
    this._modification = 'direct';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedMessage = '';
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr = message.toLowerCase().split('');
    const newKey = key.toLowerCase();

    let keyIndex = 0;
    arr.forEach((letter) => {      
      const initialIndex = alphabet.findIndex((char) => letter === char);      
      const i = alphabet.findIndex((char) => newKey[keyIndex] === char);
      if (initialIndex >= 0) {
        keyIndex += 1;
        if (keyIndex > newKey.length - 1) {
          keyIndex = 0;
        }        
        encryptedMessage += alphabet[initialIndex + i > alphabet.length - 1 ? (initialIndex + i) - (alphabet.length) : initialIndex + i];
      } else {
        encryptedMessage += letter;
      }
    });

    if (this.modification === 'reverse') {
      return encryptedMessage.toUpperCase().split('').reverse().join('');
    }
    return encryptedMessage.toUpperCase();
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let decryptedMessage = '';
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr = encryptedMessage.toLowerCase().split('');
    const newKey = key.toLowerCase();

    let keyIndex = 0;
    arr.forEach((letter) => {      
      const initialIndex = alphabet.findIndex((char) => letter === char);      
      const i = alphabet.findIndex((char) => newKey[keyIndex] === char);
      if (initialIndex >= 0) {
        keyIndex += 1;
        if (keyIndex > newKey.length - 1) {
          keyIndex = 0;
        }        
        decryptedMessage += alphabet[initialIndex >= i ? initialIndex - i : alphabet.length - (i - initialIndex)];
      } else {
        decryptedMessage += letter;
      }
    });

    if (this.modification === 'reverse') {
      return decryptedMessage.toUpperCase().split('').reverse().join('');
    }
    return decryptedMessage.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
