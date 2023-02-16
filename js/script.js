const contentWrapper = document.querySelector('.content-wrapper');
const text  = document.querySelector('h1');
let walk = 500;

const Shadow = function(e){
    console.log(e);
    const {offsetWidth:width, offsetHeight: height } = contentWrapper;
    let {offsetX: x, offsetY:y} = e;
    console.log(x,y);
    if (this !== e.target){
        x += text.offsetLeft;
        y += text.offsetTop;
        console.log('new',x,y)
    }

   const xWalk = (x/width)*walk- (walk/2)
   const yWalk = (y/height)*walk- (walk/2)
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0,.1),
    ${-xWalk}px ${-yWalk}px 0 rgba(0, 255, 0,.1),
    ${yWalk}px ${xWalk}px 0 rgba(0, 25, 0,.1),
    ${yWalk}px ${-xWalk}px 0 rgba(25, 25, 255,.1)  
    `
   
};

contentWrapper.addEventListener('mousemove',Shadow);