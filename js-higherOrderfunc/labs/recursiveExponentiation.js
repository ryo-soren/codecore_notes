// step1 - (10, 3)
// step2 - 10*(10, 2)
// step3 - 10*(10*(10, 1))
// step4 - 10*(10*(10*(10*0)))

function pow(base, exp){
    if (exp === 0){
        return base
    }else{
        return base * pow(base, exp - 1)
    }
}

console.log(pow(10, 3)) // 1000
console.log(pow(2, 4)) // 16
console.log(pow(0, 100)) // 0
console.log(pow(1, 1000)) // 1