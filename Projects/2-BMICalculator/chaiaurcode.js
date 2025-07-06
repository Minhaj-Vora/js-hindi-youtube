const form = document.querySelector("form")
const message =document.querySelector("#Message")
console.log(form);

form.addEventListener('submit',function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    console.log(results);
    

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML=`please give a valid height ${height}`
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
            results.innerHTML=`please give a valid height ${height}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`
    }

    if (((weight / ((height * height) / 10000)).toFixed(2)) <= 18.6 ) {
        message.innerHTML = `under weight ${((weight / ((height * height) / 10000)).toFixed(2))}`
    }
    if (((weight / ((height * height) / 10000)).toFixed(2)) >= 18.61 || ((weight / ((height * height) / 10000)).toFixed(2)) <= 24.9 ) {
        message.innerHTML = `Normal Range ${((weight / ((height * height) / 10000)).toFixed(2))}`
    }
    if (((weight / ((height * height) / 10000)).toFixed(2)) >= 24.9 ) {
        message.innerHTML = `Overweight ${((weight / ((height * height) / 10000)).toFixed(2))}`
    }

})