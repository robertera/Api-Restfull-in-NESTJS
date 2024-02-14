import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutosRepository } from "./produtos.repository";
import { CriaProdutosDTO } from "./dto/Produtos.dto";
import { ProdutoEntity } from "./produtos.entity";
import { randomUUID } from "crypto";
import { AtualizaProdutoDTO } from "./dto/AtualizaProdutos.dto";

@Controller("/produtos")
export class ProdutosController{

    constructor(private readonly produtosRepository: ProdutosRepository){}
    
    @Post()
    async criarProdutos(@Body() dadosProduto : CriaProdutosDTO){
        const produto = new ProdutoEntity();

        produto.id = randomUUID();
        produto.nome = dadosProduto.nome;
        produto.usuarioID= dadosProduto.usuarioID;
        produto.valor = dadosProduto.valor;
        produto.quantidadeDisponivel = dadosProduto.quantidadeDisponivel;
        produto.descricao = dadosProduto.descricao;
        produto.categoria = dadosProduto.categoria;
        produto.caracteristicas = dadosProduto.caracteristicas;
        produto.imagens = dadosProduto.imagens;

        const produtoCadastrado = this.produtosRepository.salvar(produto);
        return produtoCadastrado;
    }

    @Get()
    async listarProdutos(){
        return this.produtosRepository.listar();
    }

    @Put('/:id')
    async atualiza( @Param('id') id: string, @Body() dadosProduto: AtualizaProdutoDTO) {
    const produtoAlterado = await this.produtosRepository.atualiza(
      id,
      dadosProduto,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {const produtoRemovido = await this.produtosRepository.remove(id);
    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}