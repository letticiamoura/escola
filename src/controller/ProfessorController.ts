import { Professor } from "../model/Professor";
import { ProfessorRepository } from "../repository/ProfessorRepository";

const profRepos = new ProfessorRepository();

export class ProfessorController {

    async index() {
        return await profRepos.selectAll();
    }

    async get(id: number) {
        return await profRepos.selectOne(id);
    }
    
    async save(nome: string, matricula: string, senha: string) {

        const profToSave: Professor = new Professor(null, nome, matricula, senha, null, null, null);
        const profSaved = await profRepos.insert(profToSave);
        return profSaved;
        
    }

    async update(id: number, nome: string, matricula: string, senha: string, ativo: boolean) {
        
        const profToUpdate: Professor = new Professor(id, null, null, null, null, null, null);
        
        
        profToUpdate.nome = nome;
        profToUpdate.matricula = matricula;
        profToUpdate.senha = senha;
        profToUpdate.ativo = ativo;

        return profRepos.updateOne(profToUpdate);
        
    }

    async remove(id: number) {
        return await profRepos.removeOne(id);
    }

    async delete(id: number) {
        return await profRepos.deleteOne(id);
    }

}