const db = require("./../database");

import { Curso } from "../model/Curso";

export class CursoRepository {

    private db: any;

    constructor() {
        this.db = db;
    }

    async selectAll() {
        return await this.db.manyOrNone("SELECT * FROM cursos");
    }

    async selectOne(id: number) {
        return await this.db.oneOrNone("SELECT * FROM cursos WHERE id = $1", id);
    }

    async insert(curso: Curso) {
        await this.db.any("INSERT INTO cursos(nome, descricao) VALUES($1, $2)", [curso.nome, curso.descricao]);
        return this.selectLast();
    }

    async updateOne(curso: Curso) {

        const validValues: string[] = [];

        if(curso.nome != null) validValues.push("nome = $1");
        if(curso.descricao != null) validValues.push("descricao = $2");
        if(curso.ativo != null) validValues.push("ativo = $3");
        validValues.push("atualizado_em = $4")


        this.db.any("UPDATE cursos SET " + validValues.join(", ") + " WHERE id = $5", [curso.nome, curso.descricao, curso.ativo, new Date(), curso.id]);
        return this.selectOne(curso.id || 0);

    }

    async removeOne(id: number) {
        this.db.any("UPDATE cursos SET ativo = false WHERE id = $1", id);
        return this.selectOne(id);
    }

    async deleteOne(id: number) {
        this.db.any("DELETE FROM cursos WHERE id = $1", id);
        return this.selectOne(id);
    }

    async selectLast() {
        return await this.db.any("SELECT * FROM cursos ORDER BY criado_em DESC LIMIT 1");
    }

}