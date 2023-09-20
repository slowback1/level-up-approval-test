import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configure } from "approvals";
import { JestReporter } from "approvals/lib/Providers/Jest/JestReporter";
import {verify, verifyAsJson} from "approvals/lib/Providers/Jest/JestApprovals";

describe('AppController', () => {
  let appController: AppController;
  beforeAll(() => {
    configure({
      reporters: [new JestReporter()],
    });
  });

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      verify(appController.helloWorld());
    });
    it("has an approved output for the get pokemon endpoint", () => {
      verifyAsJson(appController.getPokemon());
    })
  });
});
