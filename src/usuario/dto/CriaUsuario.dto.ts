import { IsEmail, IsNotEmpty, IsUUID, MinLength } from "class-validator";
import { EmailEhUnico } from "../validator/email.validator";

export class CriaUsuarioDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    @IsEmail(undefined, {message: 'Endereço de email invalido'})
    @EmailEhUnico({message: 'Já existe um usuario com este email'})
    email: string;

    @MinLength(6, {message: 'A senha deve ter no minimo 6 caracteres' })
    senha: string;
}