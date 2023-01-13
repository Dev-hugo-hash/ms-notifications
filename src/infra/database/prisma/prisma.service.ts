import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
//Cria uma classe extendendo Prismaclient implementando de uma classe OnModuleInit
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query'],
    });
  }

  async onModuleInit() {
    //OnModuleInit entraga a possibilidade executar algo assim que for chamado
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
