import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {
    private usuarios : UsuarioEntity[] = [];
    
    async salvar(usuario: UsuarioEntity){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }

    async buscarEmail(email: string){
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }

    private buscarPorID(id: string){
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if(!possivelUsuario){
            throw new Error('Usuario não existe');
        }

        return possivelUsuario;
    }

    async atualizar(id: string, dadosAtualizacao: Partial<UsuarioEntity>){

        const usuario = this.buscarPorID(id)

        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id') {
                return;
            }

            usuario[chave] = valor;
        });

        return usuario;
    }

    async remove(id:string){
        const usuario = this.buscarPorID(id);
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        );

        return usuario;
    }
}