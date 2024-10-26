let counthome = 0 
let countaway = 0 
let homescoreEl = document.getElementById("homescore")
let scoreawayEL = document.getElementById("scoreaway")

function homeincrement1(){
    counthome += 1
    homescoreEl.textContent = counthome   
}
function homeincrement2(){
    counthome += 2
    homescoreEl.textContent = counthome    
}
function homeincrement3(){
    counthome += 3
    homescoreEl.textContent = counthome    
}
function awayincrement1(){
    countaway += 1
    scoreawayEL.textContent = countaway  
}
function awayincrement2(){
    countaway += 2
    scoreawayEL.textContent = countaway    
}
function awayincrement3(){
    countaway += 3
    scoreawayEL.textContent = countaway   
}
function resetaway(){
    scoreawayEL.textContent = 0
    countaway = 0
}
function resethome(){
    homescoreEl.textContent = 0
    counthome = 0
}

