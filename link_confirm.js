/**
 * Created by huyansheng on 2016/1/23.
 */
//将事件处理程序表示为JavaScript的属性，又有两点好处
//1、模块性，代码更简洁  2、可以动态的改变绑定到HTML元素的事件处理程序

function confirmLink(){
    return confirm("Do you really want to vist"+this.href+"?");
}

function confirmAllLinks(){
    for (var i = 0;i<document.links.length;i++){
        document.links[i].onclick = confirmLink;
    }
}