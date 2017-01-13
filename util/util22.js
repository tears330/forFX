// js数组去重
function uniqArray(arr){
    var n = {};
    var r = [];
    for(var i=0;i<arr.length;i++){
        if(n[arr[i]]== null){
            n[arr[i]]=true;
            r.push(arr[i]);
        }
    }
    return r;
}
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
 function simpleTrim(str) {
     for(var i = 0;i<str.length;i++){
         if(str.charAt(i)!=" "&& str.charAt(i)!="\t"){
             break;
         }
     }
     for(var j=str.length-1;j>=0;j++){
         if (str.charAt(j)!=" "&&str.chatAt(j)!="\t"){
             break;
         }
     }
     return str.slice(i,j+1);
 }
//模擬trim功能
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g,"");
}
