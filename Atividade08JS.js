let numero1, numero2, SaldoInicial, ValorDaCompra, SaldoRestante, operador, resultado, triangulo1, triangulo2, triangulo3;
let salario, salarioFinal, vinte, quinze, dez, cinco



alert("Programa que calcula o valor da compra")

SaldoInicial= prompt('Digite seu saldo')
ValorDaCompra= prompt('Digite o Valor da Compra')
SaldoRestante= SaldoInicial-ValorDaCompra



if(SaldoInicial<ValorDaCompra){
    alert("Seu Saldo é insuficiente para realizar essa compra.")
} else if(SaldoInicial+=ValorDaCompra){
    alert("A compra foi realizada com sucesso, seu saldo restante é de " + SaldoRestante + (" reais."))
}


alert("Programa que simula calculadora")


numero1= parseInt(prompt("Insira o valor do primeiro numero"))
numero2= parseInt(prompt("Insira o valor do segundo numero"))
operador= prompt("Insira o operador: +, -, *, /")

if (operador === '+') {
    resultado = numero1 + numero2
}

if (operador === '-') {
    resultado = numero1 - numero2
}

if (operador === '*') {
    resultado = numero1 * numero2
}

if (operador === '/') {
    resultado = numero1 / numero2
}
alert(" o resultado é " + resultado)



alert("Programa que das Organizaçoes Tabajara")

vinte= 20
quinze= 15
dez= 10
cinco= 5
salario= parseFloat(prompt("Insira seu salario atual"))

if (salario < 280) {
    salarioFinal = salario + (salario * (vinte / 100))
alert("Seu salario de R$" + salario + " foi reajustado, o aumento foi de 20%, seu salario atual é de R$" + salarioFinal)
} else if (salario < 700) {
    salarioFinal = salario + (salario * (quinze / 100))
alert("Seu salario de R$" + salario + " foi reajustado, o aumento foi de 15%, seu salario atual é de R$" + salarioFinal)
} else if (salario < 1500) {
    salarioFinal = salario + (salario * (dez / 100))
alert("Seu salario de R$" + salario + " foi reajustado, o aumento foi de 10%, seu salario atual é de R$" + salarioFinal)
} else {
    salarioFinal = salario + (salario * (cinco / 100))
    alert("Seu salario de R$" + salario + " foi reajustado, o aumento foi de 5%, seu salario atual é de R$" + salarioFinal)
}




alert("Programa que calcula que tipo de triangulo vc tem")


triangulo1= parseFloat(prompt("Insira o valor do primeiro lado do triangulo"))
triangulo2= parseFloat(prompt("Insira o valor do segundo lado do triangulo"))
triangulo3= parseFloat(prompt("Insira o valor do terceiro lado do triangulo"))

if (triangulo1 + triangulo2 > triangulo3 && triangulo2 + triangulo3 > triangulo1 && triangulo1 + triangulo3 > triangulo2) {
    if (triangulo1 === triangulo2 && triangulo1 === triangulo3 && triangulo2 === triangulo3) {
        alert("É um triangulo Equilatero")
    } else if (triangulo1 === triangulo2 || triangulo1 === triangulo3 || triangulo2 === triangulo3) {
        alert("É um triangulo Isóceles")
    } else {
        alert("É um triangulo escaleno")
    }
} else { alert("Isso não é um triangulo, pois para formar um triangulo, a soma de quaisquer dois lados deve ser maior que o terceiro")}





























