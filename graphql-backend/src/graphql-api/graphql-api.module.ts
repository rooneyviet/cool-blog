import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/share.module';
import { AuthResolver } from './resolvers/auth.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [SharedModule],
  providers: [UserResolver, AuthResolver],
  exports: [],
})
export class GraphqlApiModule {}
