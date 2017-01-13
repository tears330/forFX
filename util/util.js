function isArray(arr){
    if (Object.prototype.toString.call(arr)==="[object Array]") {
        return true;
    }else{
        return false;
    }
}
// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
     if (Object.prototype.toString.call(fn)==="[object Function]") {
        return true;
    }else{
        return false;
    }
}