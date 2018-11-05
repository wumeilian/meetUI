import util from './util';
import { isType } from './commonUtils';

const Animator = function (){
    this.pfx = ["webkitAnimationEnd", "animationend"];
};

Animator.prototype.startElAnimate = function (el, style) {
    if(el.classList.contains(style)){
        return;
    }
    el.classList.add(style);
};

Animator.prototype.animate = function(animateData, callback) {
    // 如果不存在、不是数组、数组长度未0 则返回
    if(!animateData){
        return;
    }

    let animateObjArray = [];

    if(isType(animateData, 'object')){
        animateObjArray.push(animateData)
    }
    else {
        animateObjArray = animateData
    }

    this.fixAnimateData(animateObjArray);

    // 遍历各元素，增加动画
    animateObjArray.forEach(item => {
        const element = item.el;
        this.startElAnimate(element, item.style);
        if(item.animateHookEnable){
            this.transitionEnd(element, animateObjArray, callback)
        }
    });

};

Animator.prototype.transitionEnd = function(element, animateData, callback){
    if (!element) {
        return function() {};
    }
    const fn = function(event) {
        animateData.forEach(item => {
            item.el.classList.remove(item.style)
        });

        if (element == event.target) {
            event.stopPropagation();
            removeListeners();

            callback();
        }
    };

    const removeListeners = function() {
        util._transitionEndEvents.forEach(function(eventName) {
            element.removeEventListener(eventName, fn, false);
        });
    };

    util._transitionEndEvents.forEach(function(eventName) {
        element.addEventListener(eventName, fn, false);
    });
};

// 如果没有指定hook，默认第一个
Animator.prototype.fixAnimateData = function(animateData){

    // 寻找出需要作为动画结束钩子的节点
    const isSpecified = animateData.some(item => {
        return item.animateHookEnable === true;
    });

    if(!isSpecified){
        animateData[0].animateHookEnable = true;
    }
};


export default new Animator();