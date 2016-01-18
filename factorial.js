/**
 * Created by huyansheng on 2016/1/16.
 */
var factorial = function(x){
    if (x == 1){
        return 1;
    }else {
        return x*factorial(x-1)
    }
}

function factorial2(x){
    if (x ==1 ){
        return 1;
    }else{
        return x*factorial2(x-1);
    }
}

console.log(factorial(5))
console.log(factorial2(5))