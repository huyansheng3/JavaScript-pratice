/**
 * Created by huyansheng on 2016/1/16.
 */

var add_2 = function(x){
    return x+2;
}
var double = function(x){
    return x*2;
}
var map = function(func,list){
    var output = [];
    for(idx in list){
        output.push(func(list[idx]));
    }
    return output;
}
var buildProcesser = function(func){
    var process_func = function(list){
        return map(func,list)
    }
    return process_func;
}

process_add_2 = buildProcesser(add_2);
process_double = buildProcesser(double);

console.log(process_add_2([2,3,4,5,6,7]));
console.log(process_double([,5,6,8,2,]));
