import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SigninModule } from './modules/signin/signIn.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, SigninModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
