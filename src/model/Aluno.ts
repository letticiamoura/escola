export class Aluno {

    id: number | null;
	nome: string | null;
	matricula: string | null;
	senha: string | null;
	idCurso: number | null;
    ativo: boolean | null;
    criadoEm: Date | null;
    atualizadoEm: Date | null;

    constructor(id: number | null, nome: string | null, matricula: string | null, senha: string | null, idCurso: number | null, ativo: boolean | null, criadoEm: Date | null, atualizadoEm: Date | null) {
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.senha = senha;
        this.idCurso = idCurso;
        this.ativo = ativo;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
    }
}