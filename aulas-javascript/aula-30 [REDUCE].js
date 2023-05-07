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

const pessoas = lista.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            ...objeto
        }
    }
}, {})

console.log(pessoas)
console.log(pessoas.Gustavo)

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade)

    return acc
}, [])

console.log(pessoasArray)