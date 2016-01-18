/**
 * Created by huyansheng on 2016/1/16.
 */
//statement is running when the js execute,but the function is static program structure
//alert(f(4))
var f=0
function f(x){
    return x*x;
}
//alert(f)

function f(x){return x*x;}   //function语句
var f = new Function("x","return x*x;");   //Function构造函数
var f = function(x){return x*x};  //函数直接量

var f = function fac(x){if (x<=1) return 1;else return x*fac(x-1);};  //函数直接量的语法支持指定函数名

function f(x,y,z){
    //首先检查传递的参数数量是否正确
    if (arguments.length != 3){
        throw  new Error("function f called with"+arguments.length+"arguments,bu it expects 3 arguments");
    }
    //下面运行真正的函数
}

function max(){
    var m = Number.NEGATIVE_INFINITY;
    for(var i=0;i<arguments.length;i++){
        if (arguments[i]>m) m=arguments[i];
    }
    return m;
}

var larget = max(10,20,55,127,12.6,12e10)
console.log(larget);

var x = function(x){
    if (x<=1) return 1;
    return x*arguments.callee(x-1);  //通过arguments的callee调用当前运行的函数
}

