function clone(object) {
    const output = {...object}
    return output;
}


const clone2 = {

    clone(obj){
        const copy = {...obj}
        return copy;
    }
}

const a = {a: 1, b: 2}
console.log(clone2.clone(a));

