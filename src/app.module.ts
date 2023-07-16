import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { PublicationModule } from './modules/publication/publication.module';

@Module({
  imports: [UserModule, AuthModule, PublicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
