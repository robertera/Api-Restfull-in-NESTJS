import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "../validator/email.validator";

export class AtualizaUsuarioDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {message: 'Endereço de email invalido'})
    @EmailEhUnico({message: 'Já existe um usuario com este email'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'A senha deve ter no minimo 6 caracteres' })
    @IsOptional()
    senha: string;
}