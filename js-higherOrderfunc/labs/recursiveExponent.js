function pow(base, exponent) {
    if (exponent === 1) {
        return base
    }else{
        return base * pow(base, exponent-1)
    }
}

console.log(pow(1, 1000));