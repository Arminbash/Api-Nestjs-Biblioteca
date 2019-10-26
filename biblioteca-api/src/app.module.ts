import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorController } from './controller/autor/autor.controller';
import { Autor } from './entity/autor.entity';
import { AutorServiceService } from './service/autor-service/autor-service.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Arminbash',
      password: 'Holamundo2',
      database: 'BibliotecaNestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Autor])
  ],
  controllers: [AppController, AutorController],
  providers: [AppService, AutorServiceService, ],
})
export class AppModule {}
