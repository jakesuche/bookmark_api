import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmapModule } from './bookmap/bookmap.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UserModule, BookmapModule, PrismaModule, ConfigModule],
  controllers: [],
})
export class AppModule {}
