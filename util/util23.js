// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i in arr){
        fn(arr[i],i);
    }
}
// 判断是否为邮箱地址
function isEmail(emailStr) {
      var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
      return pattern.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    var pattern = /^(\+\d{1,4})?\d{7,11}$/;
    return pattern.test(phone);
}