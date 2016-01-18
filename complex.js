/**
 * Created by huyansheng on 2016/1/16.
 */
function Complex(real,imaginary){
    this.x = real;
    this.y = imaginary;
}

Complex.prototype.magnitude = function(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
}

Complex.prototype.negative = function(){
    return new Complex(-this.x,-this.y);
}
