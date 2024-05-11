import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { Aluno } from "../model/Aluno";
import { AlunoController } from "../controller/AlunoController";

import { Curso } from "../model/Curso";
import { CursoController } from "../controller/CursoController";

const alunoController = new AlunoController();
const cursoController = new CursoController();


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

}