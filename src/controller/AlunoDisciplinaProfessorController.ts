import { AlunoDisciplinaProfessor } from "../model/AlunoDisciplinaProfessor";
import { AlunoDisciplinaProfessorRepository } from "../repository/AlunoDisciplinaProfessorRepository";

const alunoDiscProfRepos = new AlunoDisciplinaProfessorRepository();

export class AlunoDisciplinaProfessorController {

    async index() {
        return await alunoDiscProfRepos.selectAll();
    }

    async get(id: number) {
        return await alunoDiscProfRepos.selectOne(id);
    }

    async save(av1: number, av2: number, media: number, idAluno: number, idDisciplina: number, idProfessor: number) {
        const dataToSave: AlunoDisciplinaProfessor = new AlunoDisciplinaProfessor(null, av1, av2, media, idAluno, idDisciplina, idProfessor, null, null, null);
        const dataSaved = await alunoDiscProfRepos.insert(dataToSave);
        return dataSaved;
    }

    async update(id: number, av1: number, av2: number, media: number, idAluno: number, idDisciplina: number, idProfessor: number) {
        const dataToUpdate: AlunoDisciplinaProfessor = new AlunoDisciplinaProfessor(id, av1, av2, media, idAluno, idDisciplina, idProfessor, null, null, null);
        return alunoDiscProfRepos.updateOne(dataToUpdate);
    }

    async remove(id: number) {
        return await alunoDiscProfRepos.removeOne(id);
    }

    async delete(id: number) {
        return await alunoDiscProfRepos.deleteOne(id);
    }
 
}