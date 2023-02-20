import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import 'dotenv/config';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
