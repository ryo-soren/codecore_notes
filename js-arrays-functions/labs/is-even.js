function isEven(number){

    for (let i = number; i >= 2; i-=2) {
        if (i - 2 === 0) {
            console.log("true");
        }else if(i - 2 === 1){
            console.log("false");
        }else{
            continue;
        }
    }
}

isEven(10);
isEven(7)