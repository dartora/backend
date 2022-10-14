import { Test, TestingModule } from '@nestjs/testing';
import { CrudApiService } from './crud-api.service';

describe('CrudApiService', () => {
  let service: CrudApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudApiService],
    }).compile();

    service = module.get<CrudApiService>(CrudApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
