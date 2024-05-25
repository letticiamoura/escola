const db = require("./../database");

import { Professor } from "../model/Professor";

export class ProfessorRepository {

    private db: any;

    constructor() {
        this.db = db;
    }

    async selectAll() {
        return await this.db.manyOrNone("SELECT * FROM professores");
    }

    async insert(dados: Professor) {
        await this.db.any("INSERT INTO professores(nome, matricula, senha) VALUES ($1, $2, $3)", [dados.nome, dados.matricula, dados.senha]);
        return this.selectLast();
    }

    async selectOne(id: number) {
        return await this.db.oneOrNone("SELECT * FROM professores WHERE id = $1", id);
    }

    async updateOne(dados: Professor) {

        const validValues: string[] = [];


        if(dados.nome != null) validValues.push("nome = $1");
        if(dados.matricula != null) validValues.push("matricula = $2");
        if(dados.senha != null) validValues.push("senha = $3");
        if(dados.ativo != null) validValues.push("ativo = $4");
        validValues.push("atualizado_em = $5")


        this.db.any("UPDATE professores SET " + validValues.join(", ") + " WHERE id = $6", [dados.nome, dados.matricula, dados.senha, dados.ativo, new Date(), dados.id]);
        return this.selectOne(dados.id || 0);

    }

    async removeOne(id: number) {
        this.db.any("UPDATE professores SET ativo = false WHERE id = $1", id);
        return this.selectOne(id);
    }

    async deleteOne(id: number) {
        this.db.any("DELETE FROM professores WHERE id = $1", id);
        return this.selectOne(id);
    }

    async selectLast() {
        return await this.db.any("SELECT * FROM professores ORDER BY criado_em DESC LIMIT 1");
    }

}