const html = document.querySelector('html');
const checkbox = document.querySelector('#toggle')

//  
function getColor(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}

/** Obtem os valores iniciais das variaveis. */
const initialColors = {
    bg1Color: getColor(html, "--bg1-color"),
    bg2Color: getColor(html, "--bg2-color"),
    bg3Color: getColor(html, "--bg3-color"),
    text1Color: getColor(html, "--text1-color"),
    text2Color: getColor(html, "--text2-color"),
    text3Color: getColor(html, "--text3-color"),
    placeholderColor: getColor(html, "--placeholder-color")
}

/** Define novos valores para as variaveis */
const lightColors = {
    bg1Color: "#f5f8ff",
    bg2Color: "#fff",
    bg3Color: "#0079fe",
    text1Color: "#34373e",
    text2Color: "#a2a7b6",
    text3Color: "#0566d6",
    placeholderColor: "#333"
}

// Transformar o nome das propriedades dos objectos no nome das variaveis.
function transformKey(key) {
    return "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
}

function changeColors(colors) {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

/** Events */
checkbox.addEventListener('change', ({ target }) => {
    target.checked ? 
        changeColors(lightColors) : changeColors(initialColors);
})