class Shape{
   
    constructor(l , b , r){
        this.l = l;
        this.b = b;
        this.r = r;
    }
     getCircle() {
        return 3.14*this.r*this.r;
    }
    getTriangle(){
        return 0.5*this.l*this.b;
    }
}


class Circle extends Shape{
    constructor(r,l,b){
        super(l,b);
       
        this.r =r;
    }
    getCircle() {
        console.log(3.14*this.r*this.r);
    }
}

class Triangle extends Shape{
    constructor(r,l,b){
        super(r);
       this.b = b;
        this.l =l;
    }
    getTriangle(){
        console.log(0.5*this.l*this.b);
    }
}

let cir = new Circle(2,3,2);

cir.getCircle();

let tri = new Triangle(2,3,2);
tri.getTriangle();