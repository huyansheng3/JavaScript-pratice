/**
 * Created by huyansheng on 2016/1/16.
 */
outerloop:
    for (var i =0;i<10;i++){
        innerloop:
            for (var j = 0;j<10;j++){
                if (j>3) break;
                if (i==2) break innerloop;
                if (i==4) break outerloop;
                console.log("i="+i+",j="+j);
            }
    }

console.log("final i="+i+",j="+j);