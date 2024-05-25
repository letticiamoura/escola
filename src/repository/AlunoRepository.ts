const db = require("./../database");

import { Aluno } from "../model/Aluno";


export class AlunoRepository {

    private db: any;

    constructor() {
        this.db = db;
    }

    async selectAll() {
        return await this.db.manyOrNone("SELECT * FROM alunos");
    }

    async insert(aluno: Aluno) {
        await this.db.any("INSERT INTO alunos(nome, matricula, senha, idCurso) VALUES ($1, $2, $3, $4)", [aluno.nome, aluno.matricula, aluno.senha, aluno.idCurso]);
        return this.selectLast();
    }

    async selectOne(id: number) {
        return await this.db.oneOrNone("SELECT * FROM alunos WHERE id = $1", id);
    }

    async updateOne(aluno: Aluno) {

        const validValues: string[] = [];


        if(aluno.id != null) validValues.push("nome = $1");
        if(aluno.matricula != null) validValues.push("matricula = $2");
        if(aluno.senha != null) validValues.push("nome = $3");
        if(aluno.idCurso != null) validValues.push("idCurso = $4");
        if(aluno.ativo != null) validValues.push("ativo = $5");
        validValues.push("atualizado_em = $6")


        this.db.any("UPDATE alunos SET " + validValues.join(", ") + " WHERE id = $7", [aluno.nome, aluno.matricula, aluno.senha, aluno.idCurso, aluno.ativo, new Date(), aluno.id]);
        return this.selectOne(aluno.id || 0);

    }

    async removeOne(id: number) {
        this.db.any("UPDATE alunos SET ativo = false WHERE id = $1", id);
        return this.selectOne(id);
    }

    async deleteOne(id: number) {
        this.db.any("DELETE FROM alunos WHERE id = $1", id);
        return this.selectOne(id);
    }

    async selectLast() {
        return await this.db.any("SELECT * FROM alunos ORDER BY criado_em DESC LIMIT 1");
    }

}