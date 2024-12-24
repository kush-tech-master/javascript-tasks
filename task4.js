class University{
    constructor(uniname,dept){
        this.uniname = uniname;
        this.dept = [dept];
    }
    add(dept){
        this.dept.push(dept);
    }
    remove(dept){
        this.dept.pop(dept);
    }
    show(){
        console.log(this.dept);
    }
}

let uni = new University("gtu","computer");
uni.add("automobile");
uni.add("civil");
uni.show();
uni.remove("civil");
uni.show();