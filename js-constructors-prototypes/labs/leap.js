// Write a class or constructor function 'Year', and have 
// a prototype function or class function 'isLeap' to 
// check if the year is a leap year

class Year{
    constructor(year){
        this.year = year
    }
    isLeap(){
        if(this.year % 4 === 0){
            if(this.year % 100 !== 0 && this.year % 400 === 0){    
            console.log(false);
            }else{
                console.log(true);
            }
        }else{
                console.log(false);
            }
    }
}

const y1 = new Year(2004);
y1.isLeap(); // true

const y2 = new Year(1900);
y2.isLeap();// false

const y3 = new Year(2000);
y3.isLeap();//true

const y4 = new Year(2021);
y4.isLeap();//false