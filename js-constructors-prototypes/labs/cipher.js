class SubstitutionCipher{
    constructor(alpha, alphaEncrip){
        this.alpha = alpha
        this.alphaEncrip = alphaEncrip
    }

    encode(str){
        let output = ''

        for (const letter of str) {
            for (let i = 0; i < this.alpha.length; i++) {
                if(letter === this.alpha[i]){
                    output += this.alphaEncrip[i]
                }
            }
        }
        return output
        }

    decode(str){        
        let output = ''

        for (const letter of str) {
            for (let i = 0; i < this.alpha.length; i++) {
                if(letter === this.alphaEncrip[i]){
                    output += this.alpha[i]
                }
            }
        }
        return output
        }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz"; 
let abc2 = "etaoinshrdlucmfwypvbgkjqxz"; 

const sub = new SubstitutionCipher(abc1, abc2); 

console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"
console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou"
