/**
 * Created by huyansheng on 2016/1/17.
 */

function listanchors(d){
    var newwin = window.open("","navwin","menubar=yes,scrollbars=yes,resizable=yes,width=600,height=300");
    newwin.document.write("<h1>Navigation Windows:<br>"+document.title+"</h1>");

    for(var i = 0;i< d.anchors.length;i++){
        var a = d.anchors[i];
        var text = null;
        if (a.text) text = a.text;
        else  if (a.innerText) text = a.innerText;
        if ((text == null) || (text == "")) text = a.name; //default value

        newwin.document.write('<a href="#'+ a.name+'"'+'onclick = "opener.location.hash="'+ a.name+'";return false;">');
        newwin.document.write(text);
        newwin.document.write('</a></br>');

    }
    newwin.document.close()
}