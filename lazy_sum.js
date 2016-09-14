/**
 * Created by huyansheng on 2016/1/23.
 */
function lazy_sum(arr){
    var sum = function(){
        return arr.reduce(function (x,y){
            return x+y;
        })
    }
    return sum;  //将函数作为返回值
}

var f = lazy_sum([12,12,24,36,5,7])
console.log(f)
console.log(f())