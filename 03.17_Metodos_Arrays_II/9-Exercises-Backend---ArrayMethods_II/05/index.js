const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];



const filtroHabilitados = (arrayUsuarios) => {
    const maiores = arrayUsuarios.filter((deMaior) => {
        return deMaior.idade >= 18;
    })
    const habilitados = maiores.every((habilitado) => {
        return habilitado.habilitado === true
    })

    if (habilitados) {
        console.log(`todos passaram no teste`)
    } else {
        console.log(`todos precisam estar habilitados`)
    };

};

filtroHabilitados(usuários);