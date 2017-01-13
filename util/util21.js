function cloneObject(src) {
    var result;
    switch(Object.prototype.toString.call(src)){
        case "[object Number]":
            result = (typeof src === "object"?new Number(src):parseInt(src.toString()));
            break;
        case "[object String]":
            result = (typeof src === "object"?new String(src):src.toString());
            break;
        case "[object Boolean]":
            reult = (typeof src === "object"?new Boolean(src):src);
            break;
        case "[object Date]":
            var result = new Date(src);
            break;
        case "[object Array]":
            var temp = new Array();
            for(var i=0,a;a=src[i];i++){
                temp[i] = cloneObject(a);
            }
            result = temp;
            delete temp;
            break; 
        case "[object Object]":
            var temp = {}; 
            var keys = Object.keys(src);
            for(var i=0,a;a=keys[i];i++)
            {
                temp[a] = cloneObject(src[a]);
            }
            Result = temp;
            delete temp;
            delete keys;
            break;
        default:
            break;
    }
    return result;
}