import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PatientModule } from '../patient/patient.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    PatientModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
