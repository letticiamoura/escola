export class Curso {
    id: number | null = null;
    nome: string | null = null;
    descricao: string | null = null;
    ativo: boolean | null = null;
    criadoEm: Date | null = null;
    atualizadoEm: Date | null = null;

    constructor(id: number | null, nome: string | null, descricao: string | null, ativo: boolean | null, criadoEm: Date | null, atualizadoEm: Date | null) {
        this.id = id
        this.nome = nome;
        this.descricao = descricao;
        this.ativo = ativo;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
    }
    
}