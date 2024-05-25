import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { Aluno } from "../model/Aluno";
import { AlunoController } from "../controller/AlunoController";

import { Curso } from "../model/Curso";
import { CursoController } from "../controller/CursoController";

import { Professor } from "../model/Professor";
import { ProfessorController } from "../controller/ProfessorController";
import { Disciplina } from "../model/Disciplina";
import { DisciplinaController } from "../controller/DisciplinaController";
import { AlunoDisciplinaProfessor } from "../model/AlunoDisciplinaProfessor";
import { AlunoDisciplinaProfessorController } from "../controller/AlunoDisciplinaProfessorController";

const alunoController = new AlunoController();
const cursoController = new CursoController();
const professorController = new ProfessorController();
const disciplinaController = new DisciplinaController();
const dadosConjuntosController = new AlunoDisciplinaProfessorController();



export const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {

    //Alunos
        fastify.get("/alunos", async (request: FastifyRequest, reply: FastifyReply) => {
            const rep: Aluno[] = await alunoController.index();  
            reply.send(rep);
        });

        fastify.get(`/alunos/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id: number = parseInt(params.id);

            const rep: Aluno = await alunoController.get(id);
            reply.send(rep);
        });
        
        fastify.post("/alunos", async (request: FastifyRequest, reply: FastifyReply) => {
            
            const { nome, matricula, senha, idCurso }: any = request.body;
            const rep: Aluno = await alunoController.save(nome, matricula, senha, idCurso);

            reply.send(rep);
        });
        
        fastify.patch("/alunos/:id", async (request: FastifyRequest, reply: FastifyReply) => {

            const params = request.params as { id: string };
            const { nome, matricula, senha, idCurso, ativo }: any = request.body;
            const id = parseInt(params.id);

            const rep: Aluno = await alunoController.update(id, nome, matricula, senha, idCurso, ativo);
            reply.send(rep);

        });

        fastify.delete(`/alunos/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Aluno = await alunoController.remove(id);
            reply.send(rep);
        });

        fastify.delete(`/alunos/delete/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Aluno = await alunoController.delete(id);
            reply.send(rep);
        });


    //Cursos
        fastify.get("/cursos", async (request: FastifyRequest, reply: FastifyReply) => {
            const rep: Curso[] = await cursoController.index();  
            reply.send(rep);
        });

        fastify.get(`/cursos/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id: number = parseInt(params.id);

            const rep: Curso = await cursoController.get(id);
            reply.send(rep);
        });

        fastify.post("/cursos", async (request: FastifyRequest, reply: FastifyReply) => {
            const { nome, descricao }: any = request.body;
            const rep: Curso = await cursoController.save(nome, descricao);
            reply.send(rep);
        });

        fastify.patch("/cursos/:id", async (request: FastifyRequest, reply: FastifyReply) => {

            const params = request.params as { id: string };
            const { nome, descricao, ativo }: any = request.body;
            const id = parseInt(params.id);

            const rep: Curso = await cursoController.update(id, nome, descricao, ativo);
            reply.send(rep);

        });

        // Remoção lógica
        fastify.delete(`/cursos/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Curso = await cursoController.remove(id);
            reply.send(rep);
        });

        // Remoção concreta 
        fastify.delete(`/cursos/delete/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Curso = await cursoController.delete(id);
            reply.send(rep);
        });


        //Professores
        fastify.get("/professores", async (request: FastifyRequest, reply: FastifyReply) => {
            const rep: Professor[] = await professorController.index();  
            reply.send(rep);
        });

        fastify.get(`/professores/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id: number = parseInt(params.id);

            const rep: Professor = await professorController.get(id);
            reply.send(rep);
        });

        fastify.post("/professores", async (request: FastifyRequest, reply: FastifyReply) => {
            
            const { nome, matricula, senha }: any = request.body;
            const rep: Professor = await professorController.save(nome, matricula, senha);

            reply.send(rep);
        });
        
        fastify.patch("/professores/:id", async (request: FastifyRequest, reply: FastifyReply) => {

            const params = request.params as { id: string };
            const { nome, matricula, senha, ativo }: any = request.body;
            const id = parseInt(params.id);

            const rep: Professor = await professorController.update(id, nome, matricula, senha, ativo);
            reply.send(rep);

        });

        fastify.delete(`/professores/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Professor = await professorController.remove(id);
            reply.send(rep);
        });

        fastify.delete(`/professores/delete/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Professor = await professorController.delete(id);
            reply.send(rep);
        });

        //Disciplinas
        fastify.get("/disciplinas", async (request: FastifyRequest, reply: FastifyReply) => {
            const rep: Disciplina[] = await disciplinaController.index();  
            reply.send(rep);
        });

        fastify.get(`/disciplinas/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id: number = parseInt(params.id);

            const rep: Disciplina = await disciplinaController.get(id);
            reply.send(rep);
        });

        fastify.post("/disciplinas", async (request: FastifyRequest, reply: FastifyReply) => {
            const { nome, codigo, idCurso, idProfessor }: any = request.body;
            const rep: Disciplina = await disciplinaController.save(nome, codigo, idCurso, idProfessor);
            reply.send(rep);
        });

        fastify.patch("/disciplinas/:id", async (request: FastifyRequest, reply: FastifyReply) => {

            const params = request.params as { id: string };
            const  { nome, codigo, idCurso, idProfessor, ativo }: any = request.body;
            const id = parseInt(params.id);

            const rep: Disciplina = await disciplinaController.update(id, nome, codigo, idCurso, idProfessor, ativo);
            reply.send(rep);

        });

        // Remoção lógica
        fastify.delete(`/disciplinas/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Disciplina = await disciplinaController.remove(id);
            reply.send(rep);
        });

        // Remoção concreta 
        fastify.delete(`/disciplinas/delete/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: Disciplina = await disciplinaController.delete(id);
            reply.send(rep);
        });


        // Aluno Disciplina Professor
        //dados conjuntos / aluno professor aluno
        fastify.get("/dados-conjuntos", async (request: FastifyRequest, reply: FastifyReply) => {
            const rep: AlunoDisciplinaProfessor[] = await dadosConjuntosController.index();  
            reply.send(rep);
        });

        fastify.get(`/dados-conjuntos/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id: number = parseInt(params.id);

            const rep: AlunoDisciplinaProfessor = await dadosConjuntosController.get(id);
            reply.send(rep);
        });

        fastify.post("/dados-conjuntos", async (request: FastifyRequest, reply: FastifyReply) => {
            const { av1, av2, media, idAluno, idDisciplina, idProfessor }: any = request.body;
            const rep: AlunoDisciplinaProfessor = await dadosConjuntosController.save(av1, av2, media, idAluno, idDisciplina, idProfessor);
            reply.send(rep);
        });

        fastify.patch("/dados-conjuntos/:id", async (request: FastifyRequest, reply: FastifyReply) => {

            const params = request.params as { id: string };
            const { av1, av2, media, idAluno, idDisciplina, idProfessor }: any = request.body;
            const id = parseInt(params.id);

            const rep: AlunoDisciplinaProfessor = await dadosConjuntosController.update(id, av1, av2, media, idAluno, idDisciplina, idProfessor);
            reply.send(rep);

        });

        // Remoção lógica
        fastify.delete(`/dados-conjuntos/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: AlunoDisciplinaProfessor = await dadosConjuntosController.remove(id);
            reply.send(rep);
        });

        // Remoção concreta 
        fastify.delete(`/dados-conjuntos/delete/:id`, async (request: FastifyRequest, reply: FastifyReply) => {
            const params = request.params as { id: string };
            const id = parseInt(params.id);

            const rep: AlunoDisciplinaProfessor = await dadosConjuntosController.delete(id);
            reply.send(rep);
        });

}