"use strict";const userNumber=document.querySelector(".js-number"),button=document.querySelector(".js-btn"),clue=document.querySelector(".js-info"),userAttempt=document.querySelector(".js-attempt");let counter=0;function getRandomNumber(e){return Math.ceil(Math.random()*e)}let randomNumberResult=getRandomNumber(100);function gameNumber(e){e.preventDefault(),compareNumbers(),increaseCounter()}function compareNumbers(){const e=parseInt(userNumber.value);clue.innerHTML=e===randomNumberResult?"Has ganado, campeona!!!":e>100||e<1?"Tienes que poner un número entre 1 y 100":e<randomNumberResult?"Demasiado bajo":"Demasiado alto"}function increaseCounter(){counter+=1,userAttempt.innerHTML=counter}console.log("Nº aleatorio "+randomNumberResult),button.addEventListener("click",gameNumber);