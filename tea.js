console.log("hello");

const box1=document.getElementById("a1");
const button1=document.getElementById("b1");
const box2=document.getElementById("a2");
const button2=document.getElementById("b2");
const box3=document.getElementById("a3");
const button3=document.getElementById("b3");
const box4=document.getElementById("a4");
const button4=document.getElementById("b4");
const box5=document.getElementById("a5");
const button5=document.getElementById("b5");
const box6=document.getElementById("a6");
const button6=document.getElementById("b6");

function newpage1() {
    
    box1.style.opacity="0.3"
    box2.style.opacity="1"
    box3.style.opacity="1"
    box4.style.opacity="1"
    box5.style.opacity="1"
    box6.style.opacity="1"
}
function newpage2() {
    
    box1.style.opacity="1"
    box2.style.opacity="0.3"
    box3.style.opacity="1"
    box4.style.opacity="1"
    box5.style.opacity="1"
    box6.style.opacity="1"
}
function newpage3() {
    
    box1.style.opacity="1"
    box2.style.opacity="1"
    box3.style.opacity="0.3"
    box4.style.opacity="1"
    box5.style.opacity="1"
    box6.style.opacity="1"
}
function newpage4() {
    
    box1.style.opacity="1"
    box2.style.opacity="1"
    box3.style.opacity="1"
    box4.style.opacity="0.3"
    box5.style.opacity="1"
    box6.style.opacity="1"
}
function newpage5() {
    
    box1.style.opacity="1"
    box2.style.opacity="1"
    box3.style.opacity="1"
    box4.style.opacity="1"
    box5.style.opacity="0.3"
    box6.style.opacity="1"
}
function newpage6() {
    
    box1.style.opacity="1"
    box2.style.opacity="1"
    box3.style.opacity="1"
    box4.style.opacity="1"
    box5.style.opacity="1"
    box6.style.opacity="0.3"
}
   



a1.addEventListener("click",newpage1)
a2.addEventListener("click",newpage2)
a3.addEventListener("click",newpage3)
a4.addEventListener("click",newpage4)
a5.addEventListener("click",newpage5)
a6.addEventListener("click",newpage6)