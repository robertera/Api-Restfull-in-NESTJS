import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [UsuarioModule, ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
