document.getElementsByClassName('btn')[0].
    addEventListener('click', getBinDec);

// Se a pessoa clicar enter no input, ele vai chamar a função automaticamente
document.getElementById('binary-decimal').
    addEventListener('keypress', e => {
        switch (e.code) {
            case 'Enter':
                // Verificação de qual tipo ele vai converter, Binário ou Decimal?
                getBinDec()
                break;
        }
    })

document.getElementById('binOrDec').
    addEventListener('click', binOrDec)

function getBinDec() {
    const convert = document.getElementsByClassName('btn')[0]

    // Verificação se existe a classe, se existe ele vai converter em binário, senão vai converter em decimal
    return convert.classList.contains('bin-dec') ? getBinary() : getDecimal()
}

function binOrDec() {
    const convert = document.getElementsByClassName('btn')[0]
    const labels = document.getElementsByClassName('labels')
    const text = document.getElementsByClassName('textHeader')[0]
    const result = document.querySelector('div.result')

    // vai adicionar a classe e remover ela
    convert.classList.toggle('bin-dec')

    // se a classe existir, ele vai deixar de gerar decimal e passar a gerar binário
    if (convert.classList.contains('bin-dec')) {
        labels[0].innerText = "Decimal: "
        labels[1].innerText = "Binário: "
        text.innerHTML = "Decimal para Binário"
    } else {
        result.style.height = '25px' // Remover o height auto
        labels[0].innerText = "Binário: "
        labels[1].innerText = "Decimal: "
        text.innerHTML = "Binário para Decimal"
    }

    // Para cada troca, ele vai limpar o input e a caixa!
    document.getElementById('binary-decimal').value = ''
    result.innerText = ''
}

function getDecimal() {
    // Vai receber o número binário e reverter ele
    const binary = String(document.getElementById('binary-decimal').value).split("").reverse().join("")
    const result = document.querySelector('div.result')

    let decimal = 0

    for (let i in binary) {
        // verificação para ver se o número é diferente de 1 ou 0
        if (binary[i] != 0 && binary[i] != 1) {
            return alert("Só pode colocar numeros 0 e 1!")
        }

        decimal += Number(binary[i]) * 2 ** i++
    }

    return result.innerHTML = decimal
}

function getBinary() {
    // Vai receber o numero decimal
    const myDecimal = document.getElementById('binary-decimal').value
    const result = document.querySelector('div.result')

    let decimal = myDecimal
    let binary = ''

    for (let i = 0; i < decimal; i = 0) {
        // Está concatenando com resto da operação
        binary += decimal % 2

        // Vai dividir até o decimal ser igual a 0
        decimal = Math.floor(decimal / 2)
    }

    // Adicionar o número 0 *OPCIONAL*
    if (binary.length <= 3) {
        binary += decimal
    }

    // Para caso o nímero binário seja muito grande
    result.style.height = 'auto'

    return result.innerHTML = binary.split('').reverse().join('')
}