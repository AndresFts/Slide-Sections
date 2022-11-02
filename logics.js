const body = document.querySelector("body");
const dp1 = document.querySelector("#dp1");
const dp2 = document.querySelector("#dp2");
const dp3 = document.querySelector("#dp3");

let startY = 0;
let currentY = 0;
let scroll = 0;
let space = 0;

document.ontouchstart = (e)=> 
{
    startY = e.touches[0].clientY;

    dp1.innerHTML = `START: ${startY}`
}

document.ontouchmove = (e)=>
{
    currentY = e.touches[0].clientY;
    body.style.transform = `translateY(calc(${scroll}vh + (${currentY - startY}px)))`;

    dp2.innerHTML = 
        `X: ${e.touches[0].clientX} . . . Y: ${currentY}`;
    
    dp3.innerHTML = 
        `${currentY - startY}`;

    space = currentY - startY;
}

document.ontouchend = (e)=>
{
    if (space > 200 || space < -200)
    {
        scroll = scroll + Math.sign(space) * 100;
    }
    body.style.transform = `translateY(${scroll}vh)`;
}