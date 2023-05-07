const lista = [
    {
        nome: 'Jose',
        idade: 13,
        exibir: true
    },
    {
        nome: 'Joao',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 25
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    },
]

//some verifica se ao menos um elemento da lista se aplica na condição
const resultadoSome = lista.some((objeto) => objeto.idade > 50)
//every verifica se todos os elementos da lista atendem a condição
const resultadoEvery = lista.every((objeto) => objeto.idade > 18)

console.log('Há pessoas com idade acima de 50 anos: ', resultadoSome)
console.log('Todas as pessoas estão com idade acima de 18 anos: ', resultadoEvery)