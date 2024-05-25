const db = require("./../database");

import { Disciplina } from "../model/Disciplina";


export class DisciplinaRepository {

    private db: any;

    constructor() {
        this.db = db;
    }

    async selectAll() {
        return await this.db.manyOrNone("SELECT * FROM disciplinas");
    }

    async selectOne(id: number) {
        return await this.db.oneOrNone("SELECT * FROM disciplinas WHERE id = $1", id);
    }

    async insert(data: Disciplina) {
        await this.db.any("INSERT INTO disciplinas(nome, codigo, id_curso, id_professor) VALUES($1, $2, $3, $4)", [data.nome, data.codigo, data.idCurso, data.idProfessor]);
        return this.selectLast();
    }

    async updateOne(data: Disciplina) {

        const validValues: string[] = [];

        if(data.nome != null) validValues.push("nome = $1");
        if(data.codigo != null) validValues.push("codigo = $2");
        if(data.idCurso != null) validValues.push("id_curso = $3");
        if(data.idProfessor != null) validValues.push("id_professor = $4");
        if(data.ativo != null) validValues.push("ativo = $5");
        validValues.push("atualizado_em = $6")


        this.db.any("UPDATE disciplinas SET " + validValues.join(", ") + " WHERE id = $7", [data.nome, data.codigo, data.idCurso, data.idProfessor, true, new Date(), data.ativo]);
        return this.selectOne(data.id || 0);

    }

    async removeOne(id: number) {
        this.db.any("UPDATE disciplinas SET ativo = false WHERE id = $1", id);
        return this.selectOne(id);
    }

    async deleteOne(id: number) {
        this.db.any("DELETE FROM disciplinas WHERE id = $1", id);
        return this.selectOne(id);
    }

    async selectLast() {
        return await this.db.any("SELECT * FROM disciplinas ORDER BY criado_em DESC LIMIT 1");
    }

}