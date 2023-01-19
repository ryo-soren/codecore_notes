const StringExtras = {
    string: "",

    repeat(str, num){
        let output = ""
        for (let i = 0; i < num; i++) {
            output += str
        }
        return output;
    },

    leftPad(str, num){
        let output = ""
        for (let i = 0; i < num; i++) {
            output += " "
        }
        return output + str;
    },

    rightPad(str, num){
        let output = ""
        for (let i = 0; i < num; i++) {
            output += " "
        }
        return str + output;
    },

    pad(str, num){
        const leftSide = this.leftPad(str,num)
        return this.rightPad(leftSide, num);
    },

    capitalize(str){
        const firstLetter = str.slice(0, 1).toUpperCase();
        const rest =str.slice(1)
        return firstLetter + rest;
    },

}

let a = 'you';

StringExtras.repeat(a, 3); // returns 'youyouyou'
StringExtras.repeat(' ', 6); // returns '      '
StringExtras.leftPad(a, 5); // returns '  you'
StringExtras.leftPad(a, 1); // returns 'you'
StringExtras.leftPad(a, 3); // returns 'you'
StringExtras.leftPad(a, 4); // returns ' you'
StringExtras.rightPad(a, 6) + 'me'; // returns 'you   me'
StringExtras.pad(a, 5); // returns ' you '
StringExtras.pad(a, 6); // returns '  you '
StringExtras.pad(a, 10); // returns '    you   '
StringExtras.capitalize(a); // returns 'You'