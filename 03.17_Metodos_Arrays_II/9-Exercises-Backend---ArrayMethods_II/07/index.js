const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];


const localizarRua = (id, arrayEnderecos) => {
    const resultado = arrayEnderecos.find((endereco) => {
        return endereco.cep === id;
    });

    if (resultado){
        console.log(resultado.rua);
    } else {
        console.log("Endereço não localizado");
    };
};

localizarRua(00222444, endereços);