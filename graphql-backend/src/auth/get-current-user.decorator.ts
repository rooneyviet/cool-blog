import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    //const { req } = ctx.getContext();
    //const token = req.headers.authorization?.split('Bearer ')[1];

    return ctx.getContext().req.user;
  },
);
