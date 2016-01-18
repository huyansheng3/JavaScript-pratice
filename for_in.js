/**
 * Created by huyansheng on 2016/1/16.
 */
var fruit = {
    apple:2,
    orange:5,
    pear:1
}

sentence = "i have"
for( kind in fruit){
    quality = fruit[kind]
    sentence+=quality+" "+kind+(quality===1?"":"s")+",";
}
console.log(sentence)
sentence = sentence.substr(0,sentence.length-2)+".";