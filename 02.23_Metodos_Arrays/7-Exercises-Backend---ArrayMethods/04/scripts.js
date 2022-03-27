
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function atendimento(listaPacientes, operacao, nomePaciente) {

    if (operacao === "agendar") {
        listaPacientes.push(nomePaciente)
        const resultado = listaPacientes.join(" - ")
        return resultado
    }
    if (operacao === "atender") {
        listaPacientes.shift()
        listaPacientes.join(" - ")
        const resultado = listaPacientes.join(" - ")
        return resultado
    }


}


console.log(atendimento(pacientes, "agendar", "Alvaro'"));
console.log(atendimento(pacientes, "atender", "Yasmin"));