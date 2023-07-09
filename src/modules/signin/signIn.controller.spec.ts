import { Test, TestingModule } from '@nestjs/testing';
import { SignInController } from './signIn.controller';
import { SignInService } from './signIn.service';

describe('SigninController', () => {
  let controller: SignInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignInController],
      providers: [SignInService],
    }).compile();

    controller = module.get<SignInController>(SignInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
