/**
 * Created by huyansheng on 2016/1/23.
 */
'use strict';

function get_primes(arr) {
    return arr.filter(function (x){
        if (x==1){return false};
        for(var i=2;i<=x/2;i++){
            if (x%i == 0){
                return false;
            }
        }
        return true;
    });

}
