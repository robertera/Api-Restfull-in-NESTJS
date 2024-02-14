class CaracteristicaProduto {
    nome: string;
    descricao: string;
  }
  
  class ImagemProduto {
    url: string;
    descricao: string;
  }
  
  export class ProdutoEntity {
    id: string;
    usuarioID: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    categoria: string;
    caracteristicas: CaracteristicaProduto[];
    imagens: ImagemProduto[];
  } 