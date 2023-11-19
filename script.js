let div = document.querySelector(".color");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");

btn1.addEventListener("click" , () =>{
    div.style.backgroundColor = getComputedStyle(btn1).backgroundColor;
}) 

btn2.addEventListener("click" , () =>{
    div.style.backgroundColor = getComputedStyle(btn2).backgroundColor;
}) 

btn3.addEventListener("click" , () =>{
    div.style.backgroundColor = getComputedStyle(btn3).backgroundColor;
}) 

btn4.addEventListener("click" , () =>{
    div.style.backgroundColor = getComputedStyle(btn4).backgroundColor;
}) 

btn5.addEventListener("click" , () =>{
    div.style.backgroundColor = getComputedStyle(btn5).backgroundColor;
}) 

btn6.addEventListener("click" , () =>{
    div.style.backgroundColor = getComputedStyle(btn6).backgroundColor;
}) 