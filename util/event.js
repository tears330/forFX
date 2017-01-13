// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
         element.addEventListener(event, listener);
     } else if (element.attachEvent) {
         element.attachEvent("on" + event, listener);
     }
}



// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
     if (element.removeEventListenr) {
         element.removeEventListenr(event, listener);
     } else if (element.detachEvent) {
         element.detachEvent("on" + event, listener);
     }
}