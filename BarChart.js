/**
 * Created by huyansheng on 2016/1/20.
 */
function makeBarChart(data,width,height,barcolor){  //指定生成的柱状图的数据、宽、高和颜色
    if (!width) width=500;
    if (!height) height=350;
    if (!barcolor) barcolor="blue";

    width-=24;
    height-=14;

    var chart = document.createElement("div");
    chart.style.position = "relative";
    chart.style.width = width+"px";
    chart.style.height = height+"px";
    chart.style.border = "solid black 2px";
    chart.style.paddingLeft = "10px";
    chart.style.paddingRight = "10px";
    chart.style.paddingTop = "10px";
    chart.style.paddingBottom = "0px";
    chart.style.backgroundColor = "white";

    var barwidth = Math.floor(width/data.length);
    var maxdata = Math.max.apply(this,data);
    var scale = height/maxdata;

    for (var i = 0;i<data.length;i++){
        var bar = document.createElement("div");
        var barheight = data[i]*scale;
        bar.style.position = "absolute";
        bar.style.left = (barwidth*i+1+10)+"px";
        bar.style.top = height-barheight+10+"px";
        bar.style.width = (barwidth-2)+"px";
        bar.style.height = (barheight-1)+"px";
        bar.style.border = "solid black 1px";
        bar.style.backgroundColor = barcolor;
        bar.style.fontSize = "1px";  //绕过IEbug，暂不了解
        chart.appendChild(bar);
    }
    document.body.appendChild(chart);
    return chart;
}