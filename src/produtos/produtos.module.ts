import { Module } from "@nestjs/common";
import { ProdutosController } from "./produtos.controller";
import { ProdutosRepository } from "./produtos.repository";
import { UsuarioModule } from "src/usuario/usuario.module";

@Module({
    imports: [UsuarioModule],
    controllers: [ProdutosController],
    providers: [ProdutosRepository],
})

export class ProdutosModule{}