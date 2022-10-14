import { Test, TestingModule } from '@nestjs/testing';
import { CrudApiController } from './article.controller';
import { CrudApiService } from './crud-api.service';

describe('CrudApiController', () => {
  let controller: CrudApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudApiController],
      providers: [CrudApiService],
    }).compile();

    controller = module.get<CrudApiController>(CrudApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
