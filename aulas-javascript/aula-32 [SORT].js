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

lista.sort((a, b) => {
    if(a.idade < b.idade) {
        return -1
    } else if(a.idade > b.idade) {
        return 1
    } else {
        return 0
    }
})

console.log(lista)

lista.sort((a, b) => {
    // Por causa da tabela ASCI letra maiuscula e minuscula tem ordens diferentes
    const aNome = a.nome.toUpperCase()
    const bNome = b.nome.toUpperCase()

    if(aNome < bNome) {
        return -1
    } else if(aNome > bNome) {
        return 1
    } else {
        return 0
    }
})

console.log(lista)