import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const TokenPayload = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const jwtSerivce = new JwtService();
    const { authorization } = ctx.switchToHttp().getRequest().headers;
    const token = authorization.split(' ')[1];
    return jwtSerivce.decode(token);
  },
);
