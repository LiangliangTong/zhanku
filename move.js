  // 基础版单属性运动框架;
  function move(dom,target,attr){
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        // 获取元素当前位置;
        var iNow = parseInt(getComputedStyle(dom,null)[attr])
        var speed = (target - iNow) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        // 终止条件;
        if(target == iNow){
            clearInterval(dom.tiemr);
        }else{
            dom.style[attr] = iNow + speed + "px";
        }
    },50)
}