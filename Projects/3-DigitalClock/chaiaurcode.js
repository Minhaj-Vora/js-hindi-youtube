const clock = document.getElementById("clock")
console.log(clock);

setInterval(function (){
    const date = new Date()
    const dateInStr = date.toLocaleTimeString()
    clock.innerHTML = dateInStr
},1000)