const counter = {
    currentCount: 0,
    step: 1,

    set(num){
        this.currentCount = num
        return this;
    },
    inc(){
        this.currentCount += this.step
        return this;
    },
    dec(){
        this.currentCount -= this.step
        return this;
    },
    now(){
        console.log(this.currentCount);
    },
    setStep(num){
        this.step = num
        return this;
    }
}