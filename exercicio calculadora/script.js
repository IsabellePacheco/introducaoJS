const soma = () => {
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let soma = num1 + num2
    document.getElementById("resultado").innerText = "O resultado é igual a:" + soma
}

const subtracao = () => {
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let subtrai = num1 - num2
    document.getElementById("resultado").innerText = "O resultado é igual a:" + subtrai
}

const mutiplicacao = () => {
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let multiplica = num1 * num2
    document.getElementById("resultado").innerText = "O resultado é igual a:" + multiplica
}

const divisao = () => {
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let divide = num1 / num2
    document.getElementById("resultado").innerText = "O resultado é igual a:" + divide
}