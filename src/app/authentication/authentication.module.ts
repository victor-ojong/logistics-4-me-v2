import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authentication.resolver';

@Module({
  providers: [AuthenticationResolver, AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
