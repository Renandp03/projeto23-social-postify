import { Test, TestingModule } from '@nestjs/testing';
import { SigninController } from './signIn.controller';
import { SigninService } from './signIn.service';

describe('SigninController', () => {
  let controller: SigninController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SigninController],
      providers: [SigninService],
    }).compile();

    controller = module.get<SigninController>(SigninController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
