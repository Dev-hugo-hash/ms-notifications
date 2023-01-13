import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['easy-wahoo-5620-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZWFzeS13YWhvby01NjIwJJ-_1pNZ0h0zAJaP3E-e-F-C9-Kd6ZVwWVvnZ7yBG34',
          password: '2e2f672437fe404aa68110aa8eaa80d3',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
