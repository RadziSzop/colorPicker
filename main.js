let colorEl1 = document.querySelector("#color1")
let colorEl2 = document.querySelector("#color2")
let colorEl3 = document.querySelector("#color3")
let colorEl4 = document.querySelector("#color4")
let colorEl5 = document.querySelector("#color5")
let valueEl1 = document.querySelector("#value1")
let valueEl2 = document.querySelector("#value2")
let valueEl3 = document.querySelector("#value3")
let valueEl4 = document.querySelector("#value4")
let valueEl5 = document.querySelector("#value5")
let submitBtnEl = document.querySelector("#submit-button")
let colorPicerEl = document.querySelector("#color-picker")
let menuEl = document.querySelector("#menu")
let apiData
submitBtnEl.addEventListener("click", getingColors)
function getingColors(){
    let color = colorPicerEl.value.slice(1)
    let type = menuEl.value.toLowerCase()
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${type}`)
    .then(response => response.json())
    .then(json => {
        apiData = json

        colorEl1.style.backgroundColor = apiData.colors[0].rgb.value
        colorEl2.style.backgroundColor = apiData.colors[1].rgb.value
        colorEl3.style.backgroundColor = apiData.colors[2].rgb.value
        colorEl4.style.backgroundColor = apiData.colors[3].rgb.value
        colorEl5.style.backgroundColor = apiData.colors[4].rgb.value

        valueEl1.textContent = apiData.colors[0].hex.clean
        valueEl2.textContent = apiData.colors[1].hex.clean
        valueEl3.textContent = apiData.colors[2].hex.clean
        valueEl4.textContent = apiData.colors[3].hex.clean
        valueEl5.textContent = apiData.colors[4].hex.clean
    })
}