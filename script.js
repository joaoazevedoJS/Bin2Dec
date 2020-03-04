document.getElementsByClassName('btn')[0].
    addEventListener('click', binToDecimal);

document.getElementById('binary').
    addEventListener('keypress', e => {
        if(e.keyCode == 13) {
            binToDecimal()
        }
    })

function binToDecimal()  {
    const binary = document.getElementById('binary').value
    const mydecimal = document.querySelector('div.decimal') 

    let decimal = 0
    let indice = 0

    for(let i = binary.length - 1; i >= 0; i--) {
        if(binary[i] != 0 && binary[i] != 1) {
            return alert("Só pode colocar numeros 0 e 1!")
        }

        decimal += Number(binary[i]) * 2 ** indice++
    }

    return mydecimal.innerHTML = decimal
}