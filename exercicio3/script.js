//Crie a const para a frase aqui
//exercício 3
//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
//a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let novaFrase = frase.replace("verde", "rosa")
let fraseAlterada = novaFrase.replace("azul", "laranja")

//c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.
console.log(fraseAlterada, fraseAlterada.includes("verde", "azul"))

//console.log(frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja"))

//**EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”
console.log("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS,", "mas não deixe o gato sair\"".toUpperCase())
