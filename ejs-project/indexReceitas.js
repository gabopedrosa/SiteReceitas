module.exports = class Receitas {
    //propriedades e funções da classe aqui
    constructor(id, nome, ingredientes, modoPreparo) {
        this.id = id;
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.modoPreparo = modoPreparo;
    }
}