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
let apiData 
fetch("https://www.thecolorapi.com/scheme?hex=0047AB")
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
    // {
    //     "mode": "monochrome",
    //     "count": 5,
    //     "colors": [
    //         {
    //             "hex": {
    //                 "value": "#01122A",
    //                 "clean": "01122A"
    //             },
    //             "rgb": {
    //                 "fraction": {
    //                     "r": 0.00392156862745098,
    //                     "g": 0.07058823529411765,
    //                     "b": 0.16470588235294117
    //                 },
    //                 "r": 1,
    //                 "g": 18,
    //                 "b": 42,
    //                 "value": "rgb(1, 18, 42)"
    //             },
    //             "hsl": {
    //                 "fraction": {
    //                     "h": 0.597560975609756,
    //                     "s": 0.9534883720930231,
    //                     "l": 0.08431372549019608
    //                 },
    //                 "h": 215,
    //                 "s": 95,
    //                 "l": 8,
    //                 "value": "hsl(215, 95%, 8%)"
    //             },
    //             "hsv": {
    //                 "fraction": {
    //                     "h": 0.597560975609756,
    //                     "s": 0.976190476190476,
    //                     "v": 0.16470588235294117
    //                 },
    //                 "value": "hsv(215, 98%, 16%)",
    //                 "h": 215,
    //                 "s": 98,
    //                 "v": 16
    //             },
    //             "name": {
    //                 "value": "Midnight",
    //                 "closest_named_hex": "#011635",
    //                 "exact_match_name": false,
    //                 "distance": 217
    //             },
    //             "cmyk": {
    //                 "fraction": {
    //                     "c": 0.9761904761904763,
    //                     "m": 0.5714285714285715,
    //                     "y": 0,
    //                     "k": 0.8352941176470589
    //                 },
    //                 "value": "cmyk(98, 57, 0, 84)",
    //                 "c": 98,
    //                 "m": 57,
    //                 "y": 0,
    //                 "k": 84
    //             },
    //             "XYZ": {
    //                 "fraction": {
    //                     "X": 0.056589019607843134,
    //                     "Y": 0.06321019607843137,
    //                     "Z": 0.1650427450980392
    //                 },
    //                 "value": "XYZ(6, 6, 17)",
    //                 "X": 6,
    //                 "Y": 6,
    //                 "Z": 17
    //             },
    //             "image": {
    //                 "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=01122A",
    //                 "named": "https://www.thecolorapi.com/id?format=svg&hex=01122A"
    //             },
    //             "contrast": {
    //                 "value": "#ffffff"
    //             },
    //             "_links": {
    //                 "self": {
    //                     "href": "/id?hex=01122A"
    //                 }
    //             },
    //             "_embedded": {}
    //         },
    //         {
    //             "hex": {
    //                 "value": "#02285D",
    //                 "clean": "02285D"
    //             },
    //             "rgb": {
    //                 "fraction": {
    //                     "r": 0.00784313725490196,
    //                     "g": 0.1568627450980392,
    //                     "b": 0.36470588235294116
    //                 },
    //                 "r": 2,
    //                 "g": 40,
    //                 "b": 93,
    //                 "value": "rgb(2, 40, 93)"
    //             },
    //             "hsl": {
    //                 "fraction": {
    //                     "h": 0.5970695970695971,
    //                     "s": 0.9578947368421051,
    //                     "l": 0.18627450980392157
    //                 },
    //                 "h": 215,
    //                 "s": 96,
    //                 "l": 19,
    //                 "value": "hsl(215, 96%, 19%)"
    //             },
    //             "hsv": {
    //                 "fraction": {
    //                     "h": 0.5970695970695971,
    //                     "s": 0.9784946236559139,
    //                     "v": 0.36470588235294116
    //                 },
    //                 "value": "hsv(215, 98%, 36%)",
    //                 "h": 215,
    //                 "s": 98,
    //                 "v": 36
    //             },
    //             "name": {
    //                 "value": "Green Vogue",
    //                 "closest_named_hex": "#032B52",
    //                 "exact_match_name": false,
    //                 "distance": 341
    //             },
    //             "cmyk": {
    //                 "fraction": {
    //                     "c": 0.9784946236559141,
    //                     "m": 0.5698924731182796,
    //                     "y": 0,
    //                     "k": 0.6352941176470588
    //                 },
    //                 "value": "cmyk(98, 57, 0, 64)",
    //                 "c": 98,
    //                 "m": 57,
    //                 "y": 0,
    //                 "k": 64
    //             },
    //             "XYZ": {
    //                 "fraction": {
    //                     "X": 0.12515803921568625,
    //                     "Y": 0.14018745098039215,
    //                     "Z": 0.36550235294117644
    //                 },
    //                 "value": "XYZ(13, 14, 37)",
    //                 "X": 13,
    //                 "Y": 14,
    //                 "Z": 37
    //             },
    //             "image": {
    //                 "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=02285D",
    //                 "named": "https://www.thecolorapi.com/id?format=svg&hex=02285D"
    //             },
    //             "contrast": {
    //                 "value": "#ffffff"
    //             },
    //             "_links": {
    //                 "self": {
    //                     "href": "/id?hex=02285D"
    //                 }
    //             },
    //             "_embedded": {}
    //         },
    //         {
    //             "hex": {
    //                 "value": "#023D8F",
    //                 "clean": "023D8F"
    //             },
    //             "rgb": {
    //                 "fraction": {
    //                     "r": 0.00784313725490196,
    //                     "g": 0.23921568627450981,
    //                     "b": 0.5607843137254902
    //                 },
    //                 "r": 2,
    //                 "g": 61,
    //                 "b": 143,
    //                 "value": "rgb(2, 61, 143)"
    //             },
    //             "hsl": {
    //                 "fraction": {
    //                     "h": 0.5969267139479905,
    //                     "s": 0.9724137931034483,
    //                     "l": 0.28431372549019607
    //                 },
    //                 "h": 215,
    //                 "s": 97,
    //                 "l": 28,
    //                 "value": "hsl(215, 97%, 28%)"
    //             },
    //             "hsv": {
    //                 "fraction": {
    //                     "h": 0.5969267139479905,
    //                     "s": 0.986013986013986,
    //                     "v": 0.5607843137254902
    //                 },
    //                 "value": "hsv(215, 99%, 56%)",
    //                 "h": 215,
    //                 "s": 99,
    //                 "v": 56
    //             },
    //             "name": {
    //                 "value": "Congress Blue",
    //                 "closest_named_hex": "#02478E",
    //                 "exact_match_name": false,
    //                 "distance": 119
    //             },
    //             "cmyk": {
    //                 "fraction": {
    //                     "c": 0.986013986013986,
    //                     "m": 0.5734265734265733,
    //                     "y": 0,
    //                     "k": 0.4392156862745098
    //                 },
    //                 "value": "cmyk(99, 57, 0, 44)",
    //                 "c": 99,
    //                 "m": 57,
    //                 "y": 0,
    //                 "k": 44
    //             },
    //             "XYZ": {
    //                 "fraction": {
    //                     "X": 0.18999960784313724,
    //                     "Y": 0.21324313725490193,
    //                     "Z": 0.5616913725490197
    //                 },
    //                 "value": "XYZ(19, 21, 56)",
    //                 "X": 19,
    //                 "Y": 21,
    //                 "Z": 56
    //             },
    //             "image": {
    //                 "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=023D8F",
    //                 "named": "https://www.thecolorapi.com/id?format=svg&hex=023D8F"
    //             },
    //             "contrast": {
    //                 "value": "#ffffff"
    //             },
    //             "_links": {
    //                 "self": {
    //                     "href": "/id?hex=023D8F"
    //                 }
    //             },
    //             "_embedded": {}
    //         },
    //         {
    //             "hex": {
    //                 "value": "#0252C3",
    //                 "clean": "0252C3"
    //             },
    //             "rgb": {
    //                 "fraction": {
    //                     "r": 0.00784313725490196,
    //                     "g": 0.3215686274509804,
    //                     "b": 0.7647058823529411
    //                 },
    //                 "r": 2,
    //                 "g": 82,
    //                 "b": 195,
    //                 "value": "rgb(2, 82, 195)"
    //             },
    //             "hsl": {
    //                 "fraction": {
    //                     "h": 0.5975820379965459,
    //                     "s": 0.9796954314720813,
    //                     "l": 0.38627450980392153
    //                 },
    //                 "h": 215,
    //                 "s": 98,
    //                 "l": 39,
    //                 "value": "hsl(215, 98%, 39%)"
    //             },
    //             "hsv": {
    //                 "fraction": {
    //                     "h": 0.5975820379965459,
    //                     "s": 0.9897435897435898,
    //                     "v": 0.7647058823529411
    //                 },
    //                 "value": "hsv(215, 99%, 76%)",
    //                 "h": 215,
    //                 "s": 99,
    //                 "v": 76
    //             },
    //             "name": {
    //                 "value": "Absolute Zero",
    //                 "closest_named_hex": "#0048BA",
    //                 "exact_match_name": false,
    //                 "distance": 309
    //             },
    //             "cmyk": {
    //                 "fraction": {
    //                     "c": 0.9897435897435898,
    //                     "m": 0.5794871794871795,
    //                     "y": 0,
    //                     "k": 0.23529411764705888
    //                 },
    //                 "value": "cmyk(99, 58, 0, 24)",
    //                 "c": 99,
    //                 "m": 58,
    //                 "y": 0,
    //                 "k": 24
    //             },
    //             "XYZ": {
    //                 "fraction": {
    //                     "X": 0.256256862745098,
    //                     "Y": 0.28686509803921567,
    //                     "Z": 0.765335294117647
    //                 },
    //                 "value": "XYZ(26, 29, 77)",
    //                 "X": 26,
    //                 "Y": 29,
    //                 "Z": 77
    //             },
    //             "image": {
    //                 "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=0252C3",
    //                 "named": "https://www.thecolorapi.com/id?format=svg&hex=0252C3"
    //             },
    //             "contrast": {
    //                 "value": "#ffffff"
    //             },
    //             "_links": {
    //                 "self": {
    //                     "href": "/id?hex=0252C3"
    //                 }
    //             },
    //             "_embedded": {}
    //         },
    //         {
    //             "hex": {
    //                 "value": "#0167F6",
    //                 "clean": "0167F6"
    //             },
    //             "rgb": {
    //                 "fraction": {
    //                     "r": 0.00392156862745098,
    //                     "g": 0.403921568627451,
    //                     "b": 0.9647058823529412
    //                 },
    //                 "r": 1,
    //                 "g": 103,
    //                 "b": 246,
    //                 "value": "rgb(1, 103, 246)"
    //             },
    //             "hsl": {
    //                 "fraction": {
    //                     "h": 0.5972789115646255,
    //                     "s": 0.9919028340080972,
    //                     "l": 0.4843137254901961
    //                 },
    //                 "h": 215,
    //                 "s": 99,
    //                 "l": 48,
    //                 "value": "hsl(215, 99%, 48%)"
    //             },
    //             "hsv": {
    //                 "fraction": {
    //                     "h": 0.5972789115646255,
    //                     "s": 0.9959349593495935,
    //                     "v": 0.9647058823529412
    //                 },
    //                 "value": "hsv(215, 100%, 96%)",
    //                 "h": 215,
    //                 "s": 100,
    //                 "v": 96
    //             },
    //             "name": {
    //                 "value": "Blue Ribbon",
    //                 "closest_named_hex": "#0066FF",
    //                 "exact_match_name": false,
    //                 "distance": 135
    //             },
    //             "cmyk": {
    //                 "fraction": {
    //                     "c": 0.9959349593495935,
    //                     "m": 0.5813008130081301,
    //                     "y": 0,
    //                     "k": 0.03529411764705881
    //                 },
    //                 "value": "cmyk(100, 58, 0, 4)",
    //                 "c": 100,
    //                 "m": 58,
    //                 "y": 0,
    //                 "k": 4
    //             },
    //             "XYZ": {
    //                 "fraction": {
    //                     "X": 0.32018901960784313,
    //                     "Y": 0.35937019607843135,
    //                     "Z": 0.9651760784313725
    //                 },
    //                 "value": "XYZ(32, 36, 97)",
    //                 "X": 32,
    //                 "Y": 36,
    //                 "Z": 97
    //             },
    //             "image": {
    //                 "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=0167F6",
    //                 "named": "https://www.thecolorapi.com/id?format=svg&hex=0167F6"
    //             },
    //             "contrast": {
    //                 "value": "#ffffff"
    //             },
    //             "_links": {
    //                 "self": {
    //                     "href": "/id?hex=0167F6"
    //                 }
    //             },
    //             "_embedded": {}
    //         }
    //     ],
    //     "seed": {
    //         "hex": {
    //             "value": "#0047AB",
    //             "clean": "0047AB"
    //         },
    //         "rgb": {
    //             "fraction": {
    //                 "r": 0,
    //                 "g": 0.2784313725490196,
    //                 "b": 0.6705882352941176
    //             },
    //             "r": 0,
    //             "g": 71,
    //             "b": 171,
    //             "value": "rgb(0, 71, 171)"
    //         },
    //         "hsl": {
    //             "fraction": {
    //                 "h": 0.5974658869395711,
    //                 "s": 1,
    //                 "l": 0.3352941176470588
    //             },
    //             "h": 215,
    //             "s": 100,
    //             "l": 34,
    //             "value": "hsl(215, 100%, 34%)"
    //         },
    //         "hsv": {
    //             "fraction": {
    //                 "h": 0.5974658869395711,
    //                 "s": 1,
    //                 "v": 0.6705882352941176
    //             },
    //             "value": "hsv(215, 100%, 67%)",
    //             "h": 215,
    //             "s": 100,
    //             "v": 67
    //         },
    //         "name": {
    //             "value": "Cobalt",
    //             "closest_named_hex": "#0047AB",
    //             "exact_match_name": true,
    //             "distance": 0
    //         },
    //         "cmyk": {
    //             "fraction": {
    //                 "c": 1,
    //                 "m": 0.5847953216374269,
    //                 "y": 0,
    //                 "k": 0.3294117647058824
    //             },
    //             "value": "cmyk(100, 58, 0, 33)",
    //             "c": 100,
    //             "m": 58,
    //             "y": 0,
    //             "k": 33
    //         },
    //         "XYZ": {
    //             "fraction": {
    //                 "X": 0.22060823529411763,
    //                 "Y": 0.2475505882352941,
    //                 "Z": 0.6705831372549019
    //             },
    //             "value": "XYZ(22, 25, 67)",
    //             "X": 22,
    //             "Y": 25,
    //             "Z": 67
    //         },
    //         "image": {
    //             "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=0047AB",
    //             "named": "https://www.thecolorapi.com/id?format=svg&hex=0047AB"
    //         },
    //         "contrast": {
    //             "value": "#ffffff"
    //         },
    //         "_links": {
    //             "self": {
    //                 "href": "/id?hex=0047AB"
    //             }
    //         },
    //         "_embedded": {}
    //     },
    //     "image": {
    //         "bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=0047AB&mode=monochrome&count=5",
    //         "named": "https://www.thecolorapi.com/scheme?format=svg&hex=0047AB&mode=monochrome&count=5"
    //     },
    //     "_links": {
    //         "self": "/scheme?hex=0047AB&mode=monochrome&count=5",
    //         "schemes": {
    //             "monochrome": "/scheme?hex=0047AB&mode=monochrome&count=5",
    //             "monochrome-dark": "/scheme?hex=0047AB&mode=monochrome-dark&count=5",
    //             "monochrome-light": "/scheme?hex=0047AB&mode=monochrome-light&count=5",
    //             "analogic": "/scheme?hex=0047AB&mode=analogic&count=5",
    //             "complement": "/scheme?hex=0047AB&mode=complement&count=5",
    //             "analogic-complement": "/scheme?hex=0047AB&mode=analogic-complement&count=5",
    //             "triad": "/scheme?hex=0047AB&mode=triad&count=5",
    //             "quad": "/scheme?hex=0047AB&mode=quad&count=5"
    //         }
    //     },
    //     "_embedded": {}
    // }