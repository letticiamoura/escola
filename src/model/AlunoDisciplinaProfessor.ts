export class AlunoDisciplinaProfessor {

    id: number | null;
	av1: number | null;
    av2: number | null;
    media: number | null;
    idAluno: number | null;
    idDisciplina: number | null;
    idProfessor: number | null;
    ativo: boolean | null;
    criadoEm: Date | null;
    atualizadoEm: Date | null;

    constructor(id: number | null, av1: number | null, av2: number | null, media: number | null, idAluno: number | null, idProfessor: number | null,  idDisciplina: number | null, ativo: boolean | null, criadoEm: Date | null, atualizadoEm: Date | null) {
        this.id = id;
        this.av1 = av1;
        this.av2 = av2;
        this.media = media;
        this.idAluno = idAluno;
        this.idProfessor = idProfessor;
        this.idDisciplina = idDisciplina;
        this.ativo = ativo;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
    }
    
}
