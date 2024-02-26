const prompt = require("prompt-sync") ({sigint: true})
const numeros = []

for(let i=0; i<5;i++){
    numeros.push(parseInt(prompt(`Digite o ${i + 1} numero: `)))
}

for(let i=0; i<5;i++){
    console.log(`O numero é ${numeros[i]}: `)
}

const numerosOrdenados = [...numeros]
numerosOrdenados.sort()
console.log("A lista de números ordenados é: ", numerosOrdenados.join(" "))