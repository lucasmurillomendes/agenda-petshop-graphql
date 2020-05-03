const Operacoes = require('../../infraestrutura/operations')
const Atendimento = new Operacoes('atendimento')

const resolvers = {
    Query: {
        atendimentos: () => Atendimento.lista(),
        atendimento: (root, {id}) => Atendimento.buscaPorId(id)
    },
    Mutation: {
        adicionarAtendimento:(root, params) => Atendimento.adiciona(params),
        atualizarAtendimento:(root, params) => Atendimento.atualiza(params),
        deletarAtendimento:(root, {id}) => Atendimento.deleta(id)
    }
}

module.exports = resolvers