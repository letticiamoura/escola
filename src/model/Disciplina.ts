export class Disciplina {

    id: number | null;
	nome: string | null;
	codigo: string | null;
	idCurso: number | null;
    idProfessor: number | null;
    ativo: boolean | null;
    criadoEm: Date | null;
    atualizadoEm: Date | null;

    constructor(id: number | null, nome: string | null, codigo: string | null, idCurso: number | null, idProfessor: number | null, ativo: boolean | null, criadoEm: Date | null, atualizadoEm: Date | null) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.idCurso = idCurso;
        this.idProfessor = idProfessor;
        this.ativo = ativo;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
    }
}