import { CursoRepository } from "./../repository/CursoRepository";
import { Curso } from "../model/Curso";

const cursoRepos = new CursoRepository();

export class CursoController {

    async index() {
        return await cursoRepos.selectAll();
    }

    async get(id: number) {
        return await cursoRepos.selectOne(id);
    }

    async save(nome: string, descricao: string) {
        const cursoToSave: Curso = new Curso(null, nome, descricao, null, null, null);
        const cursoSaved = await cursoRepos.insert(cursoToSave);
        return cursoSaved;
    }

    async update(id: number, nome: string, descricao: string, ativo: boolean) {
        const cursoToUpdate: Curso = new Curso(id, nome, descricao, ativo, null, null);
        return cursoRepos.updateOne(cursoToUpdate);
    }

    async remove(id: number) {
        return await cursoRepos.removeOne(id);
    }

    async delete(id: number) {
        return await cursoRepos.deleteOne(id);
    }
 
}