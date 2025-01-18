const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault() // It is done because when we enter values in the form, by the means of get or post protocols they go on to server but here we don't need it so we have prevented it

    let height = parseFloat(document.querySelector("#height").value) // It is declared locally and not globally because on declaring globally we will have empty values stored in on relaoding the page everytime whereas here we will be able to enter value when the event(submit) will take place
    let weight = parseFloat(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    height = height / 100

    if(isNaN(height) || height <= 0) results.innerHTML = "Please give a valid height"
    else if(isNaN(weight) || weight <= 0) results.innerHTML = "Please give a valid weight"
    else {
        const BMI = (weight / (height ** 2)).toFixed(2)
        results.innerHTML = `<span> Your BMI is: ${BMI} </span>`
    }
})