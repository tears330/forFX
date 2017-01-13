// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var oldClassName = element.className;
    element.className = oldClassName === ""?newClassName:oldClassName+" "+newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    var allClassName = element.className;
    var pattern = new Regexp("\\b"+oldClassName+"\\b");
    element.className=allClassName.replace(pattern,"").trim();
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;
}
// 实现一个简单的Query
function $(selector) {
    var result = null;
     selector = selector.trim(); 
     if (selector.indexOf(" ") !== -1) { //若存在空格
        var selectorArr = selector.split(/\s+/); //拆成数组
        //待解决/////////////////////////////////////
     } else { //只有一个，直接查询
        var signal = selector[0];
         switch (signal) {
             case "#":
                result = document.getElementById(selector.substr(1));
                break;
            case ".":
                var allElements = document.getElementsByTagName("*");
                for (var i = 0; i < allElements.length; i++) {
                     console.log(allElements[i].getAttribute("class"));
                    console.log(selector.substr(1));
                    if (allElements[i].getAttribute("class") == selector.substring(1)) {
                        console.log("in");
                        // result = allElements[i];
                        // break;
                     }
                 }
                 break;
             default:
                 break;
         }
 }
 