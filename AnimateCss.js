/**
 * Created by huyansheng on 2016/1/21.
 */
/*
* @element:要产生动画的元素
* @numFrames：动画中的总帧数
* @timePerFrame：显示每帧的毫秒数
* @animation：定义动画的对象
* @whendone：一个可选的函数，在动画结束时调用，如果设置了该参数，它的参数是element
*
* animateCSS(image,25,50,
* {
*   top:function(frame,time){return 帧*8+"px";},
*   left:function(frame,time){return 帧*8+"px";}
* })
* */

function animateCSS(element,numFrames,timePerFrame,animation,whendone){
    var frame = 0 ;//存储当前的帧号
    var time = 0;//存储消耗的总时间

    //每隔timePerFrame毫秒调用一次displayNextFrame()函数，这将显示每个动画的帧
    //相当于每隔xx秒根据元素更改后的style重新绘制元素，进而形成动画的效果
    var intervalid = setInterval(displayNextFrame,timePerFrame);

    function displayNextFrame(){
        if (frame >= numFrames){
            clearInterval(intervalid); //首先查看是否结束了，如果结束了，停止调用自身
            if (whendone) whendone(element);  //调用whendone函数
            return;
        }
        for (var cssprop in animation){
            //对于每隔属性，调用它的动画函数，传递给它帧号和消耗的时间，用该函数的返回值作为指定元素的相应样式属性的新值
            try{            //用try...catch语句忽略不成功返回的异常
                element.style[cssprop] = animation[cssprop](frame,time);
            }catch(e) {}
        }
        frame++;
        time+=timePerFrame;
    }
}