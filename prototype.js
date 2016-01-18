/**
 * Created by huyansheng on 2016/1/16.
 */

var adult = {age:28}
    child = Object.create(adult)
    child.age = 8

delete child.age
var prototypeAge = child.age
console.log(prototypeAge)