import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '2days' },
    }),
  ],
  providers: [PrismaService, UserService, PostService],
  exports: [PrismaService, UserService, PostService],
})
export class SharedModule {}
