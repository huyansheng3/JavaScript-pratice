/**
 * Created by huyansheng on 2016/1/19.
 */

function maketoc(replace){
    var toc = document.createElement("div");
    toc.style.backgroundColor = "white";
    toc.style.fontFamily = "sans-serif";

    var anchor = document.createElement("a");
    anchor.setAttribute("name","TOC");
    toc.appendChild(anchor);
    anchor.appendChild(document.createTextNode("Table of Contents"));

    var table = document.createElement("table");
    toc.appendChild(table);

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    var sectionNumbers = [0,0,0,0,0,0];

    function addSections(n,toc,sectionNumbers){
        //遍历n的所有节点
        for(var m = n.firstChild;m!=null;m = m.nextSibling){
            //检查标记名是否是h1-h6
            if(m.nodeType ==1 && m.tagName.length == 2 & m.tagName.charAt(0) == "H"){
                var level  = parseInt(m.tagName.charAt(1));
                if (!isNaN(level) && level>=1 && level <=6){
                    //为该级标题增加段号
                    sectionNumbers[level-1]++;
                    //将所有低级标题的段号置为0
                    for(var i = level;i<6;i++) sectionNumbers[i]=0;
                    //下面将所有级别的标题段号组合起来.生成如2.3.1的段号
                    var sectionNumber = "";
                    for(var i=0;i<level;i++){
                        sectionNumber += sectionNumbers[i];
                        if (i<level-1) sectionNumber+=".";
                    }
                    var anchor = document.createElement("a");
                    anchor.setAttribute("name","SECT"+sectionNumber);

                    //创建返回TOC的链接，使它成为锚元素的子节点
                    var backlink = document.createElement("a");
                    backlink.setAttribute("href","#TOC");
                    backlink.appendChild(document.createTextNode("Contents"));
                    anchor.appendChild(backlink);

                    //把锚元素插入文档的段标题之前
                    n.insertBefore(anchor,m);

                    //下面会创建该段的链接，以下代码会把他加入TOC
                    var link = document.createElement("a");
                    link.setAttribute("href","#SECT"+sectionNumber);
                    //下面定义的函数获得标题文档
                    var sectionTitle = getTextContent(m);
                    //用标题的文本作为链接的内容
                    link.appendChild(document.createTextNode(sectionTitle));

                    //为TOC创建新行
                    var row = document.createElement("tr");
                    //为该行创建两个列
                    var col1 = document.createElement("td");
                    var col2 = document.createElement("td");
                    col1.setAttribute("align","right");
                    col1.appendChild(document.createTextNode(sectionNumber));
                    col2.appendChild(link);
                    row.appendChild(col1);
                    row.appendChild(col2);
                    toc.append(row)

                    //修改段标题自身元素，添加段号作为段标题的一部分
                    m.insertBefore(document.createTextNode(sectionNumber+":"), m.firstChild);
                }
            }else {  //否则，这不是标题元素，所以进行递归
                addSections(m,toc,sectionNumbers);
            }
        }
    }

//这个工具将遍历节点节点，返回找到的所有Text节点的内容，舍弃html标签；它也被认定为一个嵌套函数，所以它是该模块专用。
    function getTextContent(n){
        var s = "";
        var children = n.childNodes;
        for(var i = 0;i<children.length;i++){
            var child = children[i];
            if (child.nodeType == 3){
                s += child.data;
            }else {
                getTextContent(child);
            }
        }
        return s;
    }
}
