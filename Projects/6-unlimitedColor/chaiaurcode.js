function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); // Red
  const g = Math.floor(Math.random() * 256); // Green
  const b = Math.floor(Math.random() * 256); // Blue
  return `rgb(${r}, ${g}, ${b})`;
}

let Interval

document.querySelector('#start').addEventListener('click',function(){
    Interval = setInterval(() => {
        document.querySelector('body').style.backgroundColor=getRandomRGBColor()
    }, 1000);
})


document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(Interval)
})