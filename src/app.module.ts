import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SigninModule } from './modules/signin/signIn.module';

@Module({
  imports: [UserModule, SigninModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
