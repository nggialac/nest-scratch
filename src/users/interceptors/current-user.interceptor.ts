import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    // throw new Error('Method not implemented.');
    const request = context.switchToHttp().getRequest();
    const { userID } = request.session || {};
    if (userID) {
      const user = await this.usersService.findOne(userID);
      request.currentUser = user;
    }

    return next.handle();
  }
}
