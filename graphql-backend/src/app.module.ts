import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import {
  DirectiveLocation,
  GraphQLDirective,
  GraphQLFormattedError,
} from 'graphql';
import { join } from 'path';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/share.module';
import { GraphqlApiModule } from './graphql-api/graphql-api.module';

@Module({
  imports: [
    RecipesModule,
    //PrismaModule,
    SharedModule,
    GraphqlApiModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      formatError: (error) => {
        const originalError = error.extensions
          ?.originalError as GraphQLFormattedError;

        if (!originalError) {
          return {
            message: error.message,
            code: error.extensions?.code,
          };
        }
        return {
          message: originalError.message,
          code: error.extensions?.code,
        };
      },
      //autoSchemaFile: 'schema.gql',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),

    //PrismaModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
