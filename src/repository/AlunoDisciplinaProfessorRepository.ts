const db = require("./../database");

import { AlunoDisciplinaProfessor } from "../model/AlunoDisciplinaProfessor";

export class AlunoDisciplinaProfessorRepository {

    private db: any;

    constructor() {
        this.db = db;
    }

    async selectAll() {
        return await this.db.manyOrNone("SELECT * FROM aluno_disciplina_professor");
    }

    async selectOne(id: number) {
        return await this.db.oneOrNone("SELECT * FROM aluno_disciplina_professor WHERE id = $1", id);
    }

    async insert(data: AlunoDisciplinaProfessor) {
        await this.db.any("INSERT INTO aluno_disciplina_professor(av1, av2, media, id_aluno, id_disciplina, id_professor) VALUES($1, $2, $3, $4, $5, $6)", [data.av1, data.av2, data.media, data.idAluno, data.idDisciplina, data.idProfessor]);
        return this.selectLast();
    }

    async updateOne(data: AlunoDisciplinaProfessor) {

        const validValues: string[] = [];

        if(data.av1 != null) validValues.push("av1 = $1");
        if(data.av2 != null) validValues.push("av2 = $2");
        if(data.media != null) validValues.push("media = $3");
        if(data.idAluno != null) validValues.push("id_aluno = $4");
        if(data.idDisciplina != null) validValues.push("id_disciplina = $5");
        if(data.idProfessor != null) validValues.push("id_professor = $6");
        if(data.ativo != null) validValues.push("ativo = $7");
        validValues.push("atualizado_em = $8")


        await this.db.any("UPDATE aluno_disciplina_professor SET " + validValues.join(", ") + " WHERE id = $9", [data.av1, data.av2, data.media, data.idAluno, data.idDisciplina, data.idProfessor, data.ativo, new Date(), data.id]);
        return this.selectOne(data.id || 0);

    }

    async removeOne(id: number) {
        await this.db.any("UPDATE aluno_disciplina_professor SET ativo = false WHERE id = $1", id);
        return this.selectOne(id);
    }

    async deleteOne(id: number) {
        await this.db.any("DELETE FROM aluno_disciplina_professor WHERE id = $1", id);
        return this.selectOne(id);
    }

    async selectLast() {
        return await this.db.any("SELECT * FROM aluno_disciplina_professor ORDER BY criado_em DESC LIMIT 1");
    }

}