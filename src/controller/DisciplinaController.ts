import { CursoRepository } from "../repository/CursoRepository";
import { Curso } from "../model/Curso";
import { DisciplinaRepository } from "../repository/DisciplinaRepository";
import { Disciplina } from "../model/Disciplina";

const disciplinaRepos = new DisciplinaRepository();

export class DisciplinaController {

    async index() {
        return await disciplinaRepos.selectAll();
    }

    async get(id: number) {
        return await disciplinaRepos.selectOne(id);
    }

    async save(nome: string, codigo: string, idCurso: number, idProfessor: number) {
        const disciplinaToSave: Disciplina = new Disciplina(null, nome, codigo, idCurso, idProfessor, null, null, null);
        const disciplinaSaved = await disciplinaRepos.insert(disciplinaToSave);
        return disciplinaSaved;
    }

    async update(id:number, nome: string, codigo: string, idCurso: number, idProfessor: number, ativo: boolean) {
        const disciplinaToUpdate: Disciplina = new Disciplina(id, nome, codigo, idCurso, idProfessor, ativo, null, new Date());
        return disciplinaRepos.updateOne(disciplinaToUpdate);
    }

    async remove(id: number) {
        return await disciplinaRepos.removeOne(id);
    }

    async delete(id: number) {
        return await disciplinaRepos.deleteOne(id);
    }
 
}