/**
 * Created by huyansheng on 2016/1/16.
 */

//为我们的类定义一个构造函数方法，用它来初始化circle对象的属性，每个circle对象的属性值都不同
function Circle(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}
new Circle(0,0,0)

//定义一个常量，即所有Circle对象共享的属性，事实上，我们只是用了Math.PI，不过这样做是为了满足本例的需求
Circle.prototype.pi =3.14159
//定义个计算圆周长的方法，首先声明一个函数，然后把他赋值给原型对象的一个属性
function Circle_circumference(){return 2.this.pi*this.r};
Circle.prototype.circumference = Circle_circumference;


function Circle(radius){  //这个构造函数定义了类自身  c = new Circle(5)
    //r是构造函数定义并初始化的一个实例属性
    this.r = radius;
}

//Circle是构造函数的一个类属性
Circle.PI = 3.14159;

function Cicle_area(){return Cicle.PI*this.r*this.r};
Circle.prototype.area = Cicle_area;
