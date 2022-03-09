const submitBtnEl = document.querySelector("#submit-button")
const settingsBtnEl = document.querySelector("#settings-button")
const colorPicerEl = document.querySelector("#color-picker")
const menuEl = document.querySelector("#menu")
const modalEl = document.querySelector(".modal")
const testEl = document.querySelector("#test")
const closeBtnEl = document.querySelector(".closeBtn")
const gearEl = document.querySelector(".gear")
const colorCountEl = document.querySelector("#color-count")
const colorCountText = document.querySelector("#color-count-text")
const absoluteEl = document.querySelector(".abs")
const showRgbEl = document.querySelector("#show-rgb")
const showHexEl = document.querySelector("#show-hex")
const colorsEl = document.querySelector(".colors")
const toHexEl = document.querySelector("#toHEX")
const toRgbEl = document.querySelector("#toRGB")
const ctcEl = document.querySelector("#ctc")
const themeSelectorEl = document.querySelector("#theme-menu")
const root = document.documentElement
const lightTheme ={
    mainColor: "rgb(255, 255, 255)",
    secondaryColor: "rgb(160, 160, 160)",
    accentColor: "rgb(100, 100, 100)",
    sliderColor: "rgb(50, 50, 50)",
    fontColor: "rgb(0, 0, 0)",
    gearFilter: "invert(0%) sepia(100%) saturate(26%) hue-rotate(32deg) brightness(101%) contrast(106%)",
    exitFilter: "invert(0%) sepia(100%) saturate(26%) hue-rotate(32deg) brightness(101%) contrast(106%)",
    name:"lightTheme"
}
const darkTheme ={
    mainColor: "rgb(30, 30, 30)",
    secondaryColor: "rgb(90, 90, 90)",
    accentColor: "rgb(170, 170, 170)",
    sliderColor: "rgb(220, 220, 220)",
    fontColor: "rgb(220, 220, 220)",
    gearFilter: "invert(75%) sepia(97%) saturate(1%) hue-rotate(342deg) brightness(98%) contrast(92%)",
    exitFilter: "invert(75%) sepia(97%) saturate(1%) hue-rotate(342deg) brightness(98%) contrast(92%)",
    name: "darkTheme"

}
const kocperTheme ={
    mainColor: "rgb(23, 23, 23)",
    secondaryColor: "rgb(0,0,0)",
    accentColor: "rgb(255, 0, 5)",
    sliderColor: "rgb(255, 0, 5)",
    fontColor: "rgb(255, 255, 255)",
    gearFilter: "invert(8%) sepia(96%) saturate(6624%) hue-rotate(354deg) brightness(131%) contrast(111%)",
    exitFilter: "invert(26%) sepia(0%) saturate(4256%) hue-rotate(138deg) brightness(101%) contrast(86%)",
    name: "kocperTheme"
}

let colorEl = []
let valueEl = []
let rgbEl = []
let hexEl = []


checkChromeData()
function checkChromeData(){
        chrome.storage.sync.get('settingsData', function(items) {
        try{
            if(items.settingsData == undefined){
                throw Error("no chrome data!")
            }
            else{
                console.log("chrome data verified.")
                console.log(items)
                start()
            }   
        }
        catch(error){
            console.log(error)
            generateDefaultData()
        }

    })

}
function start(){
    console.log("Starting start fn")

    colorCountEl.addEventListener("input", countChanger) 
    showRgbEl.addEventListener("input", saveSettings) 
    showHexEl.addEventListener("input", saveSettings) 
    toRgbEl.addEventListener("input", saveSettings) 
    toHexEl.addEventListener("input", saveSettings) 
    ctcEl.addEventListener("input", saveSettings) 
    themeSelectorEl.addEventListener("input", function(){
        saveSettings("setTheme")
    })

    submitBtnEl.addEventListener("click", getingColors)
    setTheme()
    generateGrid()

}
function generateDefaultData(){
    console.log("Generating Default Data.")
    const settingsData ={
        colorCount: 5,
        showRgb: true,
        showHex: true,
        clickToCopy: true,
        toRgb: false,
        toHex: true,
        theme: lightTheme
    }
    toRgbEl.disabled = true;
    toHexEl.disabled = true;
    chrome.storage.sync.set({'settingsData': settingsData})
    console.log("Default data generated, syncing with chrome")
    console.log(settingsData)
    console.log("Starting start()")
    start()
}

function generateGrid(){
    chrome.storage.sync.get('settingsData', function(items) {
        const chromeData = items.settingsData;
        const colorCount  = parseInt(chromeData.colorCount)
        colorsEl.innerHTML=""
        colorEl = []
        valueEl = []
        rgbEl = []
        hexEl = []
        for(let i = 0; i < colorCount; i++){
            let element = document.createElement("div")
            colorEl[i]=element
            colorEl[i].classList.add("colorEl")
            colorsEl.appendChild(element)
            let element2 = document.createElement("div")
            valueEl[i]=element2
            valueEl[i].classList.add("value-div")
            colorsEl.appendChild(element2)
            if(chromeData.showRgb){
                let parRgb = document.createElement("p")
                rgbEl[i] = parRgb
                if(colorCount > 5){rgbEl[i].classList.add("par-small")}
                else{rgbEl[i].classList.add("par-big")}
                valueEl[i].appendChild(parRgb)
            }
            if(chromeData.showHex){
                let parHex = document.createElement("p")
                hexEl[i] = parHex
                if(colorCount > 5){hexEl[i].classList.add("par-small")}
                else{hexEl[i].classList.add("par-big")}
                valueEl[i].appendChild(parHex)
            }
        }
    })
}

function saveSettings(func){
    let themeName
    if(!ctcEl.checked){
        toRgbEl.disabled = true;
        toHexEl.disabled = true;
    }
    else{
        toRgbEl.disabled = false;
        toHexEl.disabled = false;
    }
    if(themeSelectorEl.value == "lightTheme") themeName = lightTheme
    else if(themeSelectorEl.value == "darkTheme") themeName = darkTheme
    else if(themeSelectorEl.value == "kocperTheme") themeName = kocperTheme
    const settingsData ={
        colorCount: colorCountEl.value,
        showRgb: showRgbEl.checked,
        showHex: showHexEl.checked,
        clickToCopy: ctcEl.checked,
        toRgb: toRgbEl.checked,
        toHex: toHexEl.checked,
        theme: themeName
    }
    chrome.storage.sync.set({'settingsData': settingsData})
    console.log("data zapisana wynosi:")
    console.log(settingsData)
    generateGrid()
    if(func == "setTheme"){
        setTheme()
    }
}

function countChanger(){
    saveSettings()
    let offset = 67.5
    colorCountText.textContent = colorCountEl.value
    if (colorCountEl.value == 10){
        offset -= 4
    }
    absoluteEl.style.left = `${((colorCountEl.value-2) * 37.5) + offset}px`
}

function getingColors(){
    const color = colorPicerEl.value.slice(1)
    const type = menuEl.value.toLowerCase()

    chrome.storage.sync.get('settingsData', function(items) {
        const chromeData = items.settingsData;
        const colorCount  = parseInt(chromeData.colorCount)
        console.log(colorCount)
        fetch(`https://www.thecolorapi.com/scheme?count=${colorCount}&hex=${color}&mode=${type}`)
        .then(response => response.json())
        .then(json => {
            const apiData = json
            console.log(json)
            for(let i = 0; i < colorCount; i++){
                colorEl[i].style.backgroundColor = apiData.colors[i].rgb.value
                if(chromeData.showRgb){
                    rgbEl[i].textContent = apiData.colors[i].rgb.value
                }
                if(chromeData.showHex){
                    hexEl[i].textContent = apiData.colors[i].hex.clean
                }
                if(chromeData.clickToCopy){
                    colorEl[i].addEventListener("click", function(){
                        if(chromeData.toHex){
                            console.log("copiedHex")
                            navigator.clipboard.writeText(apiData.colors[i].hex.clean)
                        }
                        else if(chromeData.toRgb){
                            console.log("copiedRGB")
                            navigator.clipboard.writeText(apiData.colors[i].rgb.value)
                        }
                        else{
                            console.log("copy error")
                        }
                    }) 
                }

            }
        })
    })
}

gearEl.addEventListener("click", showSettings)
function showSettings(){
    chrome.storage.sync.get('settingsData', function(items) {
        const chromeData = items.settingsData;
        colorCountEl.value = chromeData.colorCount
        showRgbEl.checked = chromeData.showRgb
        showHexEl.checked = chromeData.showHex
        ctcEl.checked = chromeData.clickToCopy
        toRgbEl.checked = chromeData.toRgb
        toHexEl.checked = chromeData.toHex
        console.log(`themeSelector to: `)
        console.log(chromeData)
        themeSelectorEl.value = chromeData.theme.name
        if(!ctcEl.checked){
            toRgbEl.disabled = true;
            toHexEl.disabled = true;
        }
        else{
            toRgbEl.disabled = false;
            toHexEl.disabled = false;
        }
        colorCountText.textContent = colorCountEl.value
        let offset = 67.5
        if (colorCountEl.value == 10){
            offset -= 4
        }
        absoluteEl.style.left = `${((colorCountEl.value-2) * 37.5) + offset}px`
        })
    modalEl.style.visibility = "visible";
}



closeBtnEl.addEventListener("click", function(){
    modalEl.style.visibility = "hidden";
})


function setTheme(){
// console.log("themeSetteer")
// console.log(theme)
// let colorTheme
// if(theme == "darkTheme"){console.log(colorTheme = darkTheme)}
// if(theme == "lihtTheme"){console.log(colorTheme = lightTheme)}
chrome.storage.sync.get('settingsData', function(chromeData) {
    let colorTheme = chromeData.settingsData.theme
    console.log("data z chrome for seting theme:")
    console.log(chromeData)
    root.style.setProperty('--mainColor', colorTheme.mainColor);
    root.style.setProperty('--secondaryColor', colorTheme.secondaryColor);
    root.style.setProperty('--accentColor', colorTheme.accentColor);
    root.style.setProperty('--sliderColor', colorTheme.sliderColor);
    root.style.setProperty('--fontColor', colorTheme.fontColor);
    root.style.setProperty('--gearFilter', colorTheme.gearFilter);
    root.style.setProperty('--exitFilter', colorTheme.exitFilter);

}
    // if(start=="starting"){
    //     console.log("save ze startu")
    // }
    // else{
    //     console.log("save nie ze startu")
    //     saveSettings()
    // }
)



}
// FIXME: naprawić, naprawić wszystko bo to gówno i nei działą