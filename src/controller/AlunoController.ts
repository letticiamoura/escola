import { Aluno } from "./../model/Aluno";
import { AlunoRepository } from "./../repository/AlunoRepository";

const alunoRepos = new AlunoRepository();

export class AlunoController {

    async index() {
        return await alunoRepos.selectAll();
    }

    async get(id: number) {
        return await alunoRepos.selectOne(id);
    }
    
    async save(nome: string, matricula: string, senha: string, idCurso: number) {

        const alunoToSave: Aluno = new Aluno(null, nome, matricula, senha, idCurso, null, null, null);
        const alunoSaved = await alunoRepos.insert(alunoToSave);
        return alunoSaved;
        
    }

    async update(id: number, nome: string, matricula: string, senha: string, idCurso: number, ativo: boolean) {
        
        const alunoToUpdate: Aluno = new Aluno(id, null, null, null, null, null, null, null);
        
        
        alunoToUpdate.nome = nome;
        alunoToUpdate.matricula = matricula;
        alunoToUpdate.senha = senha;
        alunoToUpdate.idCurso = idCurso;
        alunoToUpdate.ativo = ativo;

        return alunoRepos.updateOne(alunoToUpdate);
        
    }

    async remove(id: number) {
        return await alunoRepos.removeOne(id);
    }

    async delete(id: number) {
        return await alunoRepos.deleteOne(id);
    }

}