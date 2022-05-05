import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';


@Module({
  imports: [
      TypeOrmModule.forRoot(
        {
          "type": "postgres",
          "host": "db",
          "port": 5432,
          "username": "root",
          "password": "root",
          "database": "ft_transcendence",
          "entities": ["dist/**/*.entity{.ts,.js}"],
          "synchronize": true
        }
      ),
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
