/**
 * Created by huyansheng on 2016/1/17.
 */
var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = "Vist my homepage at http://www.isp.com/david";
result = text.match(url);
if (result != null){

    console.log(result.index);
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    console.log(result[3]);
}

var pattern = /Java/g;
var text = "JavaScript is more fun than Java";
var pattern_result;
while ((pattern_result = pattern.exec(text)) != null){
    //alert("Mached : "+pattern_result[0]+" "+"at position : "+pattern_result.index+" ;next search begins at : "+pattern.lastIndex);
}

// g mean global , i means ignoreCase ;m means multilines

parseInt()


//JavaScript中字符串无法改变，字符串的传递和拷贝使用的是引用，而比较是通过值比较

text = " my email address: huyansheng3@qq.com   your address is  xidian@gmail.edu"
mail_pattern = /(\w+)@(\w+)\.(com|cn|org|edu)/g;
result = "";
result = text.match(mail_pattern);
if (result != null){
    console.log(result);
}


